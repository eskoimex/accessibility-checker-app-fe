import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');
    const formData = new FormData();
    formData.append('file', file);

    try {
      // const { data } = await axios.post('http://localhost:5000/upload', formData);
      const { data } = await axios.post('https://accessibility-checker-app.onrender.com/upload', formData);
      setAnalysis(data);
      const reader = new FileReader();
      reader.onload = () => setHtmlContent(reader.result);
      reader.readAsText(file);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const highlightIssues = () => {
    if (!htmlContent || !analysis) return null;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    analysis.issues.forEach((issue) => {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = issue.element;
      const elementToHighlight = doc.body.querySelector(tempElement.firstChild.tagName);
      if (elementToHighlight) elementToHighlight.classList.add('highlight');
    });
    return { __html: doc.body.innerHTML };
  };

  return (
    <div className="App">
      <h1>Accessibility Checker</h1>
      <input type="file" accept=".html" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {analysis && (
        <div className="results">
          <h2>Compliance Score: {analysis.complianceScore}%</h2>
          <ul>
            {analysis.issues.map((issue, index) => (
              <li key={index}>
                <strong>{issue.type}</strong>: {issue.suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {htmlContent && (
        <div className="html-preview">
          <h2>Highlighted HTML</h2>
          <div className="preview" dangerouslySetInnerHTML={highlightIssues()} />
        </div>
      )}
    </div>
  );
}

export default App;
