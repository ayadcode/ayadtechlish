## 💻 AyadTechlish HTML Starter

A modern, minimal HTML project powered by **Tailwind CSS**, designed to build responsive and fast front-end interfaces with ease.

---

### 🚀 Features

- ✅ **Clean HTML5 Structure** – Follows modern best practices
- 🎨 **Tailwind CSS** – Utility-first CSS for rapid UI development
- 🧩 **Reusable Components** – Pre-styled sections, buttons, and containers
- ⚙️ **Simple NPM Scripts** – Easy commands for development and production
- 📱 **Responsive Design** – Fully mobile-first layout for all screen sizes

---

### 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm or yarn

---

### 🛠️ Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

---

### 📁 Project Structure

```
html_app/
├── css/
│   ├── tailwind.css       # Tailwind source with custom utilities
│   └── main.css           # Compiled CSS (generated)
├── pages/                 # HTML page templates
├── index.html             # Main entry point
├── package.json           # Project metadata and scripts
└── tailwind.config.js     # Tailwind configuration
```

---

### 🎨 Styling

This project uses Tailwind CSS for styling. You can customize spacing, colors, and typography in `tailwind.config.js`.

---

### 🧩 Customization

To extend or override Tailwind’s default settings, edit:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#1e3a8a", // Example: custom brand color
      },
    },
  },
};
```

---

### 📦 Build for Production

To generate the final production-ready CSS file:

```bash
npm run build:css
# or
yarn build:css
```

---

### 📱 Responsive Breakpoints

Tailwind’s default breakpoints included:

- `sm` – 640px and up
- `md` – 768px and up
- `lg` – 1024px and up
- `xl` – 1280px and up
- `2xl` – 1536px and up

---

### 🙏 Acknowledgments

- Built with ❤️ by [AyadTechlish](https://yourdomain.com)
- Powered by [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) & [Tailwind CSS](https://tailwindcss.com)
