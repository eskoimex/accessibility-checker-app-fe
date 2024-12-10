import React from 'react';

function AnalysisDisplay({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Compliance Score: {analysis.complianceScore}%</h2>
      <ul className="mt-4 space-y-2">
        {analysis.issues.map((issue, index) => (
          <li key={index} className="border border-red-200 bg-red-50 p-3 rounded-lg text-gray-800">
            <strong>{issue.type}</strong>: {issue.suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnalysisDisplay;
