import React from 'react';
import axios from 'axios';

function FileUploader({ file, onFileChange, onAnalysisUpdate, onHtmlContentUpdate }) {
  const handleUpload = async () => {
    if (!file) return alert('Please select a file');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await axios.post('http://localhost:5000/upload', formData);
      onAnalysisUpdate(data);

      const reader = new FileReader();
      reader.onload = () => onHtmlContentUpdate(reader.result);
      reader.readAsText(file);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept=".html"
        onChange={onFileChange}
        className="w-full max-w-md border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Upload
      </button>
    </div>
  );
}

export default FileUploader;
