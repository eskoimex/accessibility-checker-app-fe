import React from 'react';
import { render, screen } from '@testing-library/react';
import AnalysisDisplay from './AnalysisDisplay';

describe('AnalysisDisplay', () => {
  it('renders the compliance score and issues list', () => {
    const mockAnalysis = {
      complianceScore: 80,
      issues: [{ type: 'Missing Alt Text', suggestion: 'Add alt text to images' }],
    };

    render(<AnalysisDisplay analysis={mockAnalysis} />);

    expect(screen.getByText(/compliance score/i)).toBeInTheDocument();
    expect(screen.getByText(/80%/i)).toBeInTheDocument();
    expect(screen.getByText(/missing alt text/i)).toBeInTheDocument();
    expect(screen.getByText(/add alt text to images/i)).toBeInTheDocument();
  });

  it('does not render anything if no analysis is provided', () => {
    const { container } = render(<AnalysisDisplay analysis={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
