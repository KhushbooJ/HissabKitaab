# HisaabKitaab – Phase 1 React Project

A production-ready React UI prototype for HisaabKitaab, a Splitwise Pro-alternative built for Indian users — with unlimited expense tracking and OCR receipt scanning from day one.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Router / navigation shell
├── styles/
│   └── globals.css           # Design tokens (CSS variables) + global styles
├── components/
│   ├── PhoneFrame.jsx        # Reusable phone shell + status bar
│   └── Icons.jsx             # All SVG icons as React components
└── screens/
    ├── HomeScreen.jsx        # Screen 1 – Digital Ledger
    ├── HomeScreen.module.css
    ├── AddExpenseScreen.jsx  # Screen 2 – Smart Entry Form
    ├── AddExpenseScreen.module.css
    ├── OcrScanScreen.jsx     # Screen 3 – OCR Camera Viewfinder
    ├── OcrScanScreen.module.css
    ├── ItemSplitScreen.jsx   # Screen 4 – Itemized Split (interactive)
    ├── ItemSplitScreen.module.css
    ├── SettleUpScreen.jsx    # Screen 5 – Settlement Suggestions
    ├── SettleUpScreen.module.css
    ├── SettingsScreen.jsx    # Screen 6 – Data Export & Preferences
    └── SettingsScreen.module.css
```

---

## 🎨 Design System

All colors and radii are defined as CSS custom properties in `src/styles/globals.css`:

| Token | Value | Usage |
|---|---|---|
| `--purple` | `#7b5ea7` | Primary brand / CTAs |
| `--teal` | `#7dd3b0` | Positive amounts / confirmations |
| `--coral` | `#f4927a` | Negative amounts / debts |
| `--bg` | `#0f1117` | App background |
| `--surface` | `#1a1d2e` | Card backgrounds |
| `--text` | `#e8e6ff` | Primary text |
| `--text-muted` | `#7b8197` | Secondary / label text |

---

## 📱 Screens

| # | Screen | Key Features |
|---|---|---|
| 1 | **Home** | Balance overview, group bubbles, activity feed, FAB |
| 2 | **Add Expense** | OCR banner, split-with friends, item-split toggle |
| 3 | **OCR Scan** | Animated scan line, corner guides, extracted data |
| 4 | **Item Split** | Interactive person→item assignment, tax auto-calc |
| 5 | **Settle Up** | Settlement cards, edit history, offline badge |
| 6 | **Settings** | CSV/JSON export, toggles for edit history & offline mode |

---

## 🛠 Tech Stack

- **React 18** with hooks
- **Vite 5** for dev/build tooling
- **CSS Modules** for scoped component styles
- **No external UI library** – fully custom design system
- **Google Fonts** – DM Sans + DM Mono
