import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import registry from "@/screens/registry.json";

type Screen = { html: string; styles: string; script: string; bodyClass: string; scope: string };

function runScreenScript(script: string) {
  if (!script.trim()) return;
  // Expose top-level functions globally so the original inline onclick/onchange handlers work.
  const names = Array.from(script.matchAll(/^\s*(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/gm)).map((m) => m[1]);
  const exportCode = names.map((n) => `window[${JSON.stringify(n)}] = ${n};`).join("\n");
  try {
    new Function(`${script}\n${exportCode}`)();
  } catch (err) {
    console.error("Screen script failed", err);
  }
}

export function ScreenView({ screen }: { screen: Screen }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    runScreenScript(screen.script);
  }, [screen]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const href = a.getAttribute("href") ?? "";
      if (href === "#" || href === "") {
        e.preventDefault();
      } else if (href.startsWith("/")) {
        e.preventDefault();
        navigate({ to: href });
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [navigate]);

  return (
    <div className={`${screen.scope} ${screen.bodyClass} min-h-screen`}>
      {screen.styles && <style dangerouslySetInnerHTML={{ __html: screen.styles }} />}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: screen.html }} />
      <ScreenSwitcher />
    </div>
  );
}

function ScreenSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="mk-switcher">
      {open && (
        <nav className="mk-switcher-panel" aria-label="All screens">
          {registry.map((r) => (
            <Link key={r.path} to={r.path} onClick={() => setOpen(false)} data-active={pathname === r.path}>
              {r.label}
            </Link>
          ))}
        </nav>
      )}
      <button type="button" className="mk-switcher-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="material-symbols-outlined">apps</span> Screens
      </button>
    </div>
  );
}
