📄 **Languages:** [繁體中文](README.zh-tw.md) | [English](README.md)

# i18nSheetSync - Frontend (Vue.js) Interface 🚀  

✨ **Sync i18n translations to Google Sheets and provide a simple web interface that allows non-engineers to easily upload files and synchronize data!** 

## 📖 Introduction  

The frontend part of this project provides a simple web interface that allows users to easily upload `.ts` language files to the backend (Google Apps Script) for processing and synchronizing translation data to Google Sheets. Additionally, users can export translation data from Google Sheets and download it in `.ts` format.

## 🔥 Key Features  

✅ **Upload TypeScript i18n files** (e.g., `zh-TW.ts`, `en.ts`, `th.ts`)  
✅ **Automatically flatten nested structures**, storing translations as `key.value.subValue` format in Google Sheets  
✅ **One-click sync to update translations in [Google Sheets](https://www.google.com/sheets/about/)**  
✅ **Supports large-scale translation updates with optimized performance**  
✅ **Export translations from Google Sheets and convert them back to `.ts` files** (bidirectional sync)  

## 💡 Who is this for?  

- **Front-end developers** who want non-engineers to manage translations  
- **Product managers / marketing teams** who need to update translations easily  
- **Projects with internationalization (i18n)** that require efficient multi-language management  

## Workflow  

1. The user enters the web page and clicks the file upload button.
2. The user selects the language file (e.g., Chinese, English, Thai, etc.) and uploads it.
3. Clicking the "Confirm" button sends the file to the backend (Google Apps Script) for processing and synchronization with Google Sheets.
4. The backend processes the file and synchronizes it with Google Sheets.

## 🔧 Tech Stack  

- **Frontend:** Vue 3
- **UI Library:** UnoCSS
- **File Upload:** Supports `.ts` files
- **Backend:** Google Apps Script
- **Backend Interaction:** Axios for API requests

### How to Use

1. Clone the project:
  ```bash
  git clone https://github.com/WendyHsinYun/i18nSheetSync-frontend.git
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