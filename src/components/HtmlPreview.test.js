import React from 'react';
import { render, screen } from '@testing-library/react';
import HtmlPreview from './HtmlPreview';

describe('HtmlPreview', () => {
  it('renders highlighted HTML content', () => {
    const mockHtml = '<html><body><div>Hello</div></body></html>';
    const mockAnalysis = {
      issues: [{ element: '<div>Hello</div>' }],
    };

    render(<HtmlPreview htmlContent={mockHtml} analysis={mockAnalysis} />);

    const preview = screen.getByRole('region');
    expect(preview.innerHTML).toContain('highlight');
  });

  it('does not render if no HTML content is provided', () => {
    const { container } = render(<HtmlPreview htmlContent={null} analysis={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
