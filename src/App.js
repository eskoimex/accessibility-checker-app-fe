import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await axios.post('http://localhost:5000/upload', formData);
      setAnalysis(data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <h1>Accessibility Checker</h1>
      <input type="file" accept=".html" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {analysis && (
        <div className="results">
          <h2>Compliance Score: {analysis.complianceScore}</h2>
          <ul>
            {analysis.issues.map((issue, index) => (
              <li key={index}>
                <strong>{issue.type}</strong>: {issue.suggestion}
                <pre>{issue.element}</pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
