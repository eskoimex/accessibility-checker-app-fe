export function checkUniqueIds(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const allElements = doc.querySelectorAll('*');
  
    const idMap = new Map();
    const duplicateIds = [];
  
    allElements.forEach((el) => {
      const id = el.id;
      if (id) {
        if (idMap.has(id)) {
          duplicateIds.push(id);
        } else {
          idMap.set(id, true);
        }
      }
    });
  
    return duplicateIds.length > 0
      ? { hasIssues: true, duplicateIds }
      : { hasIssues: false, message: 'All IDs are unique.' };
  }
  
  export function checkFormLabels(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const formElements = doc.querySelectorAll('input, select, textarea');
  
    const labelIssues = [];
  
    formElements.forEach((element) => {
      const id = element.id;
      if (id) {
        const label = doc.querySelector(`label[for="${id}"]`);
        if (!label) {
          labelIssues.push({
            elementType: element.tagName.toLowerCase(),
            id,
            issue: 'Missing associated label',
          });
        }
      } else {
        labelIssues.push({
          elementType: element.tagName.toLowerCase(),
          issue: 'Element is missing an ID',
        });
      }
    });
  
    return labelIssues.length > 0
      ? { hasIssues: true, labelIssues }
      : { hasIssues: false, message: 'All form elements have associated labels.' };
  }
  