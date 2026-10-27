# Sivashanmugam — Portfolio (React + Vite)

Your original HTML/CSS/JS/Bootstrap portfolio, rebuilt as a React app using Vite.
Same look, same content — now split into components and data files so future
updates are just editing arrays instead of hunting through HTML.

## Project structure

```
portfolio-react/
├── public/
│   ├── images/profile.jpg     ← add your photo here
│   └── resume.pdf             ← add your resume here
├── src/
│   ├── components/            ← Navbar, Hero, About, Skills, Projects, Contact, Footer
│   ├── data/
│   │   ├── skills.js          ← edit this to add/remove/update a skill card
│   │   └── projects.js        ← edit this to add/remove/update a project
│   ├── style.css              ← your original CSS, unchanged
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 1. Before running: add your missing assets

Two files referenced in your original site weren't part of the upload:

- `public/images/profile.jpg` — your hero section photo
- `public/resume.pdf` — the "Download Resume" button target

Drop both into `public/` (replacing the `.txt` placeholder notes) before you run the site.

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) (LTS version) installed. Then, in this folder:

```bash
npm install
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) with hot-reload —
save a file and the browser updates instantly.

To make sure the production build works before deploying:

```bash
npm run build
npm run preview
```

## 3. Updating your portfolio later

- **Add/edit a project** → open `src/data/projects.js`, copy an existing object, change the text.
- **Add/edit a skill category** → open `src/data/skills.js`, same idea.
- **Change styling/colors** → `src/style.css` (all your original CSS variables and classes are intact).
- **Change bio/hero text** → edit `src/components/About.jsx` or `src/components/Hero.jsx` directly.

No HTML rebuilding needed — just edit, save, and if you're on Vercel/Netlify with
GitHub connected, push to `main` and it redeploys automatically.

## 4. Deploy to Vercel (recommended)

**One-time setup:**

1. Create a free account at [vercel.com](https://vercel.com) (sign in with GitHub — easiest).
2. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial React portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In Vercel: **Add New → Project**, select your GitHub repo.
4. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. You'll get a live URL like `your-portfolio.vercel.app` in about a minute.

**From then on:** every time you `git push` to `main`, Vercel automatically rebuilds
and redeploys — that's the whole "regular updates" workflow. Edit `src/data/projects.js`
→ commit → push → live in ~60 seconds.

**Optional:** add a custom domain later under your Vercel project's **Settings → Domains**.

## Notes on what changed vs. your original site

- Bootstrap CSS/Icons and your custom CSS are now imported via npm instead of CDN `<link>` tags.
- Bootstrap's JS bundle (used only for the mobile navbar collapse) was replaced with a small
  React `useState` toggle in `Navbar.jsx` — same visual behavior, no extra dependency.
- The scroll-based active-nav-link logic and scroll-progress bar from `script.js` were ported
  into `Navbar.jsx` and `ScrollProgress.jsx` as React `useEffect` hooks.
- Everything else (markup structure, class names, content, CSS) is unchanged.
