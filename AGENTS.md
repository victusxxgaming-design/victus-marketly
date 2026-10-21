<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Screens in `src/screens/*.ts` are generated from the Google Stitch export and rendered via `ScreenView` (raw HTML + original scripts); edit markup there or convert a screen to JSX when it needs real logic. Why: preserves the exported designs pixel-faithfully.
- Each screen's design tokens live in `src/screens/marketly-theme.css`, scoped by a `.mk-<screen>` class. Why: the Stitch screens use slightly different token values.
