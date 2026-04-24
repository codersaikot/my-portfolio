# 👨‍💻 Tariqul Islam Saykat — Personal Portfolio

A modern, responsive personal portfolio website built with React + Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm or yarn

### Installation

```bash
# 1. Clone or unzip the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 📁 Folder Structure

```
portfolio/
├── index.html                   # HTML entry point
├── vite.config.js               # Vite bundler config
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.js            # PostCSS config
├── package.json                 # Dependencies
│
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # Root component (theme state)
    ├── index.css                # Global styles + CSS tokens
    │
    ├── data/
    │   └── portfolioData.js     # ← ALL content lives here
    │
    ├── hooks/
    │   └── index.js             # useTypingEffect + useFadeIn
    │
    └── components/
        ├── Navbar.jsx           # Sticky navbar + mobile menu
        ├── Hero.jsx             # Hero section with typing animation
        └── Sections.jsx         # About, Skills, Projects, Experience,
                                 # Contact, Footer
```

---

## ✏️ Customization

### Update personal info
Edit **`src/data/portfolioData.js`** — all text, skills, projects, and experience are stored there. No need to touch component code.

### Change colors / theme
Edit CSS custom properties in **`src/index.css`** under `:root` (dark) and `[data-theme="light"]`.

### Add a project
Add an object to the `projects` array in `portfolioData.js`:

```js
{
  id: 6,
  icon: "🛒",
  color: "rgba(74,222,128,.15)",
  category: "Web App",
  title: "E-Commerce Platform",
  year: "2024",
  desc: "Full-stack e-commerce with cart, payment, and admin panel.",
  tags: ["React", "Node.js", "MongoDB", "Stripe"],
  live: "https://yoursite.com",
  github: "https://github.com/yourrepo"
}
```

### Wire up the contact form
In `src/components/Sections.jsx` find the `handleSubmit` function inside `Contact`.
Replace the `// TODO` comment with an EmailJS call or your own API:

```js
// EmailJS example
import emailjs from "@emailjs/browser";
await emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY");
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output → dist/ folder, ready to deploy
```

Deploy to **Vercel**, **Netlify**, or **GitHub Pages** by pointing to the `dist/` folder.

---

## 🎨 Tech Stack

| Layer     | Tech                              |
|-----------|-----------------------------------|
| UI        | React 18 (functional components)  |
| Styling   | Tailwind CSS + CSS custom props   |
| Animation | CSS keyframes + IntersectionObserver |
| Bundler   | Vite                              |
| Fonts     | Space Grotesk + Fira Code (Google Fonts) |

---

## 📄 License
MIT — free to use and customize.
