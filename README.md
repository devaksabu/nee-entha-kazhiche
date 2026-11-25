# ÷ NEE.ENTHA.KAZHICHE
**Eat together. Split fairly.**

**NEE.ENTHA.KAZHICHE** (*"What did you eat?"*) is a lightweight, single-file web application built for friend groups to split restaurant and café bills without sign-ups, app installs, or server hosting.

---

## ✨ Key Features

- **Saved Café & Restaurant Menus:** Pick dishes directly from pre-configured local menus (South Indian Café, Thattukada, Pizza & Pasta) with live item counters (`− qty ＋`) and instant line subtotals.
- **Google Sheets Live Sync:** Menus and dish prices sync automatically from a linked Google Sheet via Google Apps Script so everyone at the table sees up-to-date prices.
- **Hidden Admin Mode:** PIN-protected menu manager built right into the UI—tap the `÷` logo 5 times (or press `Ctrl + Shift + A`) to add, rename, or update café menus and dish prices on the fly.
- **Receipt OCR & Manual Entry:** Scan a receipt photo directly in the browser using Tesseract.js, or enter dishes manually.
- **Unselected-by-Default Dish Assignment:** Nobody gets charged by accident—tap the exact people who shared each dish, or switch to **Custom Shares** for unequal portions.
- **Proportional GST Split:** Enter the total GST amount in `₹`, and the app distributes it fairly based on each person's share of the food subtotal.
- **One-Tap Sharing & CSV Export:** Copy a WhatsApp-ready breakdown to the clipboard or download an itemized CSV summary.

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, CSS3 (Neo-Brutalist Dark UI), JavaScript (ES6+)
- **OCR Engine:** Tesseract.js v5 (client-side image text recognition)
- **Cloud Database:** Google Sheets + Google Apps Script Web App (`doGet` / `doPost`)
- **Hosting:** GitHub Pages (single `index.html` static deployment)

---

## 🚀 Quick Setup

1. **Unlock Admin Mode:** Tap the logo 5 times within 2.5 seconds and enter your Admin PIN to manage menus live.
