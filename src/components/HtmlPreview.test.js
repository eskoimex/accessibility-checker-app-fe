import React from 'react';
import { render, screen } from '@testing-library/react';
import HtmlPreview from './HtmlPreview';

test('renders the HTML preview with highlighted issues', () => {
  const htmlContent = `
    <div>
      <p>Sample Content</p>
      <button>Click Me</button>
    </div>
  `;
  const analysis = {
    issues: [
      { element: '<button>Click Me</button>', type: 'Button Issue', suggestion: 'Add descriptive text.' },
    ],
  };

  render(<HtmlPreview htmlContent={htmlContent} analysis={analysis} />);
  expect(screen.getByText(/Highlighted HTML/i)).toBeInTheDocument();
  // expect(screen.getByText(/Sample Content/i)).toBeInTheDocument();
  // expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
});
