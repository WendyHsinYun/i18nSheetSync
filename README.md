📄 **Languages:** [繁體中文](README.zh-tw.md) | [English](README.md)

# i18nSheetSync - Frontend (Vue.js) Interface 🚀

✨ **Sync i18n translations to Google Sheets and provide a simple web interface that allows non-engineers to easily upload files and synchronize data!**

## 📖 Introduction

The frontend part of this project provides a simple web interface that allows users to easily upload `.ts` language files to the backend (Google Apps Script) for processing and synchronizing translation data to Google Sheets. Additionally, users can export translation data from Google Sheets and download it in `.ts` format.

## 🔥 Key Features

✅ **Upload TypeScript i18n files** (e.g., `zh-TW.ts`, `en.ts`, `th.ts`)  
✅ **Automatically flatten nested structures**, storing translations as `key.value.subValue` format in Google Sheets  
✅ **One-click sync to update translations in [Google Sheets](https://docs.google.com/spreadsheets/d/1WfxL4daUYj8EASJaihXgtqz59_qtbg0n29s1aeMQ0pA/edit?gid=0#gid=0)**  
✅ **Supports large-scale translation updates with optimized performance**  
✅ **Export translations from Google Sheets and convert them back to `.ts` files** (bidirectional sync)

## 💡 Who is this for?

- **Front-end developers** who want non-engineers to manage translations
- **Product managers / marketing teams** who need to update translations easily
- **Projects with internationalization (i18n)** that require efficient multi-language management

## 📋 Workflow

1. **Upload File:** Click upload and select a language file (e.g., Chinese, English, Thai).
2. **Confirm:** Click "Confirm" to send the file to the backend for processing and sync with Google Sheets.
3. **Processing:** Backend processes the file and syncs it with [Google Sheets](https://docs.google.com/spreadsheets/d/1WfxL4daUYj8EASJaihXgtqz59_qtbg0n29s1aeMQ0pA/edit?gid=0).

---

## 📁 Language Files

- **Use sample `lang` files** in the root directory or download from the cloud folder.
- **Only specific `.ts` formats** have been tested.

### ☁️ Cloud Folder

- [Download here](https://drive.google.com/drive/folders/1AG-jlfU-ssdxNzR7qC1BrczIn7NUjK71?usp=sharing)

## 🔧 Tech Stack

- **Frontend:** Vue 3
- **UI Library:** UnoCSS
- **File Upload:** Supports `.ts` files
- **Backend:** Google Apps Script
- **Backend Interaction:** Axios for API requests

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

Open your browser and visit http://localhost:5173/ to perform file upload operations.

---

🎯 **Make i18n translation effortless—let Google Sheets handle it!** 🚀

---
