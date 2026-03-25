# Navneet Singh — Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. Features a dark/light theme toggle, smooth animations, parallax effects, typing animation, and a working contact form powered by EmailJS.

## Live Demo

> https://navneet-portfolio-rho.vercel.app/

---

##  Tech Stack

- **React** — Component-based UI
- **Vite** — Fast development and build tool
- **EmailJS** — Contact form email delivery
- **React Icons** — Social media and UI icons
- **CSS3** — Custom styling with CSS variables for theming

---

## Features

- Dark / Light theme toggle with smooth transition
- Typing animation cycling through roles
- Scroll + mouse parallax on hero section
- Smooth fade-in animations on scroll
- Cursor glow effect (desktop)
- Responsive mobile layout with hamburger menu
- Working contact form (EmailJS)
- Downloadable CV button
- Fixed social media sidebar (desktop) / inline (mobile)
- Project cards with GitHub links
- About Me tabs (Skills, Experience, Education)

---

## Project Structure

```
portfolio/
  public/
    images/
      navneet1.jpg         # Desktop hero image
      navneet_mobile.jpg   # Mobile hero image
      navneet2.png         # About section image
    Navneet_Singh_Resume.pdf
  src/
    components/
      Navbar.jsx
      Header.jsx
      About.jsx
      Projects.jsx
      Contact.jsx
      SocialBar.jsx
    App.jsx
    main.jsx
    style.css
  index.html
  package.json
  vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/NavneetSingh09/portfolio.git

# Navigate to project folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails directly from the frontend.

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create an Email Service and connect your Gmail
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Replace the credentials in `Contact.jsx`:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
)
```

---

## Customization

All accent colors and theme variables are defined at the top of `style.css`:

```css
body[data-theme="dark"] {
  --accent: #7c3aed;
  --accent-light: #a78bfa;
  ...
}
```

Change `--accent` to any color to instantly update the entire site's color scheme.

---

##  Dependencies

```json
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-icons": "^5.x",
  "@emailjs/browser": "^4.x"
}
```

---



---

## 🤝 Connect

- GitHub: [@NavneetSingh09](https://github.com/NavneetSingh09)
- LinkedIn: [navneet-kumar-singh](https://linkedin.com/in/navneet-kumar-singh-842429154)
- 
