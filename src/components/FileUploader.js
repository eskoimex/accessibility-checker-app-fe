import React, { useState } from "react";
import axios from "axios";

function FileUploader({
  file,
  onFileChange,
  onAnalysisUpdate,
  onHtmlContentUpdate,
}) {
  const [loading, setLoading] = useState(false); // Loading state

  const handleUpload = async (e) => {
    if (!file) return alert("Please select a file");

    setLoading(true); // Start loading when a file is selected
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post(
        //"http://localhost:5000/upload",
        "https://accessibility-checker-app.onrender.com/upload",
        formData
      );
      onAnalysisUpdate(data);

      const reader = new FileReader();
      reader.onload = () => onHtmlContentUpdate(reader.result);
      reader.readAsText(file);
      // setLoading(false); // Stop loading
      // Delay the loading state change for 5 seconds
      setTimeout(() => {
        setLoading(false); // Start loading after 5 seconds
      }, 500);
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoading(false); // Stop loading if there's an error
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
      <p>Upload an HTML file to start analysing.</p>
      {loading && <div className="loader mt-4">Analysing...</div>}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Start Analysing
      </button>
    </div>
  );
}

export default FileUploader;
