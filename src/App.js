import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import AnalysisDisplay from './components/AnalysisDisplay';
import HtmlPreview from './components/HtmlPreview';

function App() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleAnalysisUpdate = (data) => {
    setAnalysis(data);
  };

  const handleHtmlContentUpdate = (content) => {
    setHtmlContent(content);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Accessibility Checker</h1>
        <FileUploader
          file={file}
          onFileChange={handleFileChange}
          onAnalysisUpdate={handleAnalysisUpdate}
          onHtmlContentUpdate={handleHtmlContentUpdate}
        />
        <AnalysisDisplay analysis={analysis} />
        <HtmlPreview htmlContent={htmlContent} analysis={analysis} />
      </div>
    </div>
  );
}

export default App;
