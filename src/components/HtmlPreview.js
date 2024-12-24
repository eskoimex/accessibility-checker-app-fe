import React from 'react';

function HtmlPreview({ htmlContent, analysis }) {
  // const highlightIssues = () => {
  //   if (!htmlContent || !analysis) return null;

  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlContent, 'text/html');

  //   analysis.issues.forEach((issue) => {
  //     if (!issue.element) return; // Skip if the element selector is not defined

  //     try {
  //       const tempElement = document.createElement('div');
  //       tempElement.innerHTML = issue.element;

  //       // Use a safer way to find the element by its tag name and attributes
  //       const elementToHighlight = doc.querySelector(tempElement.firstElementChild?.tagName);

  //       if (elementToHighlight) {
  //         elementToHighlight.classList.add('highlight');
  //       } else {
  //         console.warn(`Element not found for issue: ${issue.element}`);
  //       }
  //     } catch (error) {
  //       console.error(`Error processing issue element: ${issue.element}`, error);
  //     }
  //   });

  //   return { __html: doc.body.innerHTML };
  // };

  const highlightIssues = () => {
    if (!htmlContent || !analysis) return null;
  
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
  
    analysis.issues.forEach((issue) => {
      try {
        const selector = issue.selector; // Assume issue provides a valid CSS selector.
        const elements = doc.querySelectorAll(selector);
  
        elements.forEach((el) => {
          el.classList.add('highlight');
        });
      } catch (error) {
        console.error(`Error applying highlight for selector: ${issue.selector}`, error);
      }
    });
  
    return { __html: doc.body.innerHTML };
  };
  

  if (!htmlContent) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Highlighted HTML</h2>
      <div
        className="mt-4 p-4 border border-gray-300 bg-gray-50 rounded-lg overflow-x-auto preview"
        dangerouslySetInnerHTML={highlightIssues()}
      />
      <style>
        {`
          .preview .highlight {
            border: 2px solid red;
            background-color: rgba(255, 0, 0, 0.1);
            position: relative;
          }
          .preview .highlight::after {
            content: "Issue Detected";
            position: absolute;
            top: -20px;
            left: 0;
            background: red;
            color: white;
            padding: 3px;
            font-size: 12px;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
}

export default HtmlPreview;
