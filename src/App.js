// import React, { useState } from 'react';
// import axios from 'axios';
// //import './App.css';
// // import './tailwind.css';

// function App() {
//   const [file, setFile] = useState(null);
//   const [analysis, setAnalysis] = useState(null);
//   const [htmlContent, setHtmlContent] = useState(null);

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleUpload = async () => {
//     if (!file) return alert('Please select a file');
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const { data } = await axios.post('http://localhost:5000/upload', formData);
//       //const { data } = await axios.post('https://accessibility-checker-app.onrender.com/upload', formData);
//       setAnalysis(data);
//       const reader = new FileReader();
//       reader.onload = () => setHtmlContent(reader.result);
//       reader.readAsText(file);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   const highlightIssues = () => {
//     if (!htmlContent || !analysis) return null;
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, 'text/html');
//     analysis.issues.forEach((issue) => {
//       const tempElement = document.createElement('div');
//       tempElement.innerHTML = issue.element;
//       const elementToHighlight = doc.body.querySelector(tempElement.firstChild.tagName);
//       if (elementToHighlight) elementToHighlight.classList.add('highlight');
//     });
//     return { __html: doc.body.innerHTML };
//   };

//   return (
//     <div className="App">
//       <h1>Accessibility Checker</h1>
//       <input type="file" accept=".html" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>

//       {analysis && (
//         <div className="results">
//           <h2>Compliance Score: {analysis.complianceScore}%</h2>
//           <ul>
//             {analysis.issues.map((issue, index) => (
//               <li key={index}>
//                 <strong>{issue.type}</strong>: {issue.suggestion}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {htmlContent && (
//         <div className="html-preview">
//           <h2>Highlighted HTML</h2>
//           <div className="preview" dangerouslySetInnerHTML={highlightIssues()} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';

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
      const { data } = await axios.post('http://localhost:5000/upload', formData);
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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Accessibility Checker</h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept=".html"
            onChange={handleFileChange}
            className="w-full max-w-md border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Upload
          </button>
        </div>

        {analysis && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Compliance Score: {analysis.complianceScore}%</h2>
            <ul className="mt-4 space-y-2">
              {analysis.issues.map((issue, index) => (
                <li
                  key={index}
                  className="border border-red-200 bg-red-50 p-3 rounded-lg text-gray-800"
                >
                  <strong>{issue.type}</strong>: {issue.suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {htmlContent && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Highlighted HTML</h2>
            <div
              className="mt-4 p-4 border border-gray-300 bg-gray-50 rounded-lg overflow-x-auto"
              dangerouslySetInnerHTML={highlightIssues()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
