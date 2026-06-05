# Static site

Pure HTML + CSS. Two files, no build step:

- `index.html`
- `styles.css`

## Publish on GitHub Pages

1. Create a new GitHub repo.
2. Copy these two files into the root of the repo (or a `/docs` folder).
3. In the repo, go to **Settings → Pages** and set the source to the branch
   you committed to (e.g. `main`, root or `/docs`).
4. Your site will be live at `https://<username>.github.io/<repo>/`.

That's it — no Node, no bundler, no framework.
