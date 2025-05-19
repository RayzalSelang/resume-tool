// src/components/FileLoader.jsx
import React, { useRef } from 'react';

const FileLoader = ({ onFileLoad }) => {
  const fileInputRef = useRef(null);
  
  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        onFileLoad(jsonData);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        alert('Invalid JSON file. Please upload a valid resume JSON file.');
      }
    };
    reader.readAsText(file);
    
    // Reset file input
    e.target.value = null;
  };
  
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Load Resume
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />
    </div>
  );
};

export default FileLoader;