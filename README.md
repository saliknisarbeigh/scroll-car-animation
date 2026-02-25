# 🚗 Car Scroll Animation

A smooth, scroll-driven car animation built with **React**, **GSAP ScrollTrigger**, and **Tailwind CSS**. As the user scrolls, a top-down car slides across the screen revealing hidden text and metric cards fade in sequentially.

---

## ✨ Features

- **Scroll-driven animation** — Car + dark road background slide from left to right, revealing "WELCOME ITZFIZZ" text
- **Pinned section** — The viewport stays fixed while the animation plays out
- **Sequential metric reveals** — 4 stat cards fade in at different scroll progress points
- **Fully responsive** — Metric cards resize and reposition on mobile screens
- **Smooth performance** — Uses `will-change: transform` and GSAP's optimized rendering

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **GSAP + ScrollTrigger** | Scroll-based animations |
| **Tailwind CSS v4** | Utility-first styling |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+)
- **npm** (v9+)

### Installation

```bash
# Clone the repo
git clone https://github.com/saliknisarbeigh/scroll-car-animation.git

# Navigate to the project
cd scroll-car-animation

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173/`

---

## 📁 Project Structure

```
src/
├── assets/
│   └── car.png                # Top-down car image
├── components/
│   └── CarScrollSection.jsx   # Main scroll animation component
├── constants/
│   └── metrics.js             # Metric card data
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
└── index.css                  # Global styles + responsive rules
```

---

## 🎬 How It Works

1. **Pinned viewport** — A `100vh` section is pinned using GSAP ScrollTrigger over `4000px` of scroll distance
2. **Car + road slide** — The car image sits inside a dark background container. Both animate from `x: -5vw` to `x: 84vw` as the user scrolls
3. **Text reveal** — A green band with "WELCOME ITZFIZZ" sits behind the dark road. As the road slides right, the text is progressively revealed
4. **Metric cards** — 4 cards (yellow, dark, blue, orange) fade in at 15%, 35%, 60%, and 85% scroll progress

---

## 📱 Responsive Design

- **Desktop** — Metric cards are `289×156px`, positioned at `left: 50%`
- **Mobile (≤768px)** — Cards shrink to `160×90px` with repositioned layout via CSS media queries

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by [Salik Nisar Beigh](https://github.com/saliknisarbeigh)**
