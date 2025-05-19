import React, { useState, useRef } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import ThemeSwitcher from './components/ThemeSwitcher';
import FileLoader from './components/FileLoader';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const App = () => {
  // Create a ref for the resume preview component
  const resumeRef = useRef(null);
  
  // State for resume data
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      title: '',
      summary: ''
    },
    workExperience: [
      {
        id: '1',
        jobTitle: '',
        company: '',
        description: '',
        startDate: '',
        endDate: ''
      }
    ],
    education: [
      {
        id: '1',
        institution: '',
        degree: '',
        field: '',
        graduationDate: ''
      }
    ],
    skills: []
  });

  // State for theme selection
  const [theme, setTheme] = useState('classic');
  const [darkMode, setDarkMode] = useState(false);

  // Handle resume data updates
  const handleResumeDataChange = (newData) => {
    setResumeData(newData);
  };

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Export resume as PDF
  const exportAsPDF = async () => {
    if (!resumeRef.current) return;
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      
      pdf.addImage(imgData, 'PNG', imgX, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${resumeData.personalInfo.name || 'resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };
  
  // Save resume data as JSON
  const saveAsJSON = () => {
    const dataStr = JSON.stringify(resumeData);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${resumeData.personalInfo.name || 'resume'}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Handle loading resume data from JSON file
  const handleFileLoad = (loadedData) => {
    setResumeData(loadedData);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="py-6 px-4 bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">ResumeCraft</h1>
          <div className="flex items-center space-x-4">
            <FileLoader onFileLoad={handleFileLoad} />
            <ThemeSwitcher 
              theme={theme} 
              darkMode={darkMode}
              onThemeChange={handleThemeChange}
              onDarkModeToggle={toggleDarkMode}
            />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Resume Editor</h2>
            <ResumeForm 
              resumeData={resumeData} 
              onResumeDataChange={handleResumeDataChange}
              onExportPDF={exportAsPDF}
              onSaveJSON={saveAsJSON}
            />
          </div>
          
          <div className="sticky top-8">
            <h2 className="text-2xl font-semibold mb-6">Live Preview</h2>
            <ResumePreview 
              resumeData={resumeData} 
              theme={theme} 
              darkMode={darkMode}
              ref={resumeRef}
            />
          </div>
        </div>
      </main>
      
      <footer className={`py-4 px-4 mt-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ResumeCraft. Build your professional resume in minutes!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;