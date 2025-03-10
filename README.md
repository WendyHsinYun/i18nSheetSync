📄 **Languages:** [繁體中文](README.zh-tw.md) | [English](README.md)

# i18nSheetSync - Frontend

**Demo:** [i18nSheetSync Demo](https://wendyhsinyun.github.io/i18nSheetSync/)

## 🎥 Demo

![Demo](./src/assets/demo.gif)

## 📖 Overview

A simple web interface for uploading `.ts` language files to sync translations with Google Sheets. Supports exporting translations back to `.ts` files.

## 🔑 Features

- Upload `.ts` i18n files (e.g., `zh-TW.ts`, `en.ts`)
- Automatically flatten nested keys for Google Sheets
- Sync translations with [Google Sheets](https://docs.google.com/spreadsheets/d/1WfxL4daUYj8EASJaihXgtqz59_qtbg0n29s1aeMQ0pA/edit?gid=0)
- Export translations from Google Sheets to `.ts` files

## 📋 Workflow

1. Upload a `.ts` language file.
2. Click "Confirm" to sync with Google Sheets.
3. Export translations if needed.

## 📁 Language Files

- Use sample files in the root `lang` directory or [download here](https://drive.google.com/drive/folders/1AG-jlfU-ssdxNzR7qC1BrczIn7NUjK71?usp=sharing).
- Only tested with specific `.ts` formats.

## 🛠 Tech Stack

- **Framework:** Vue 3 (Composition API + TypeScript)
- **File Handling:** JavaScript FileReader API
- **Backend:** Google Apps Script (REST API for Google Sheets integration)

### How to Use

1. Clone the project:

```bash
git clone https://github.com/WendyHsinYun/i18nSheetSync.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm dev
```

4. Build the Project:

```bash
npm run build   # Build the project and generate static files
npm run deploy  # Deploy to GitHub Pages
```

Open your browser and visit http://localhost:5173/ to perform file upload operations.

---

**Simplify i18n management with Google Sheets.** 🚀

---
