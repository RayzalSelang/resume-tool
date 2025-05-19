# ResumeCraft

ResumeCraft is a React-based resume builder application that allows users to create, customize, and export professional resumes with ease.

![ResumeCraft Screenshot](screenshot.png)

## 🚀 Features

- **User-friendly Input Form** with sections for:
  - Personal Information (name, title, summary)
  - Work Experience (multiple entries)
  - Education (multiple entries)
  - Skills (tag-based)

- **Live Preview Panel** that shows the formatted resume as you type

- **Theming Options**:
  - Light/Dark mode toggle
  - Multiple design templates (Classic, Modern, Creative)

- **Export Options**:
  - Export as PDF
  - Save as JSON for later editing

## 🛠️ Tech Stack

- **Frontend Framework**: React with Hooks
- **Styling**: Tailwind CSS
- **PDF Export**: jsPDF + html2canvas
- **Build Tool**: Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- npm (usually comes with Node.js)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/resume-tool.git
   cd resume-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application running.

## 🏗️ Project Structure

```
resume-tool/
├── public/
├── src/
│   ├── components/
│   │   ├── ResumeForm.jsx
│   │   ├── ResumePreview.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   └── FileLoader.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## 🧩 Components

### App.jsx
The main application component that manages the state and renders the form and preview sections.

### ResumeForm.jsx
Handles all the form inputs and updates the resume data.

### ResumePreview.jsx
Displays the formatted resume in real-time based on user input.

### ThemeSwitcher.jsx
Manages the theme selection and dark mode toggle.

### FileLoader.jsx
Handles loading saved resume data from JSON files.

## 🚀 How to Use

1. **Input your information** in the form fields on the left side
2. **See the changes in real-time** on the right preview panel
3. **Choose a theme and color mode** using the theme switcher in the header
4. **Export your resume** as a PDF when you're finished
5. **Save your data** as JSON to edit again later

## 📦 Building for Production

To build the application for production:

```bash
npm run build
```

This will create a `dist` folder with all the optimized files ready for deployment.

## 🚢 Deployment

The `dist` folder can be deployed to any static site hosting service like Netlify, Vercel, GitHub Pages, etc.

## 🔄 Upcoming Features

- **More templates**: Additional professional resume designs
- **Contact information section**: Add email, phone, and social media links
- **Profile picture upload**: Option to add a photo to your resume
- **Language selection**: Support for multiple languages
- **Custom color schemes**: Personalize the color palette of your resume

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [jsPDF](https://github.com/MrRio/jsPDF)
- [html2canvas](https://github.com/niklasvh/html2canvas)
