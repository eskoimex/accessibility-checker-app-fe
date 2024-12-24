import React from 'react';
import { render, screen } from '@testing-library/react';
import AnalysisDisplay from './AnalysisDisplay';

test('renders compliance score and issues list', () => {
  const analysis = {
    complianceScore: 85,
    issues: [
      { type: 'Alt Text Issue', suggestion: 'Add alt text to images.' },
      { type: 'Color Contrast Issue', suggestion: 'Ensure sufficient contrast between text and background.' },
    ],
  };

  render(<AnalysisDisplay analysis={analysis} />);

  expect(screen.getByText(/Compliance Score: 85%/i)).toBeInTheDocument();
  expect(screen.getByText(/Alt Text Issue/i)).toBeInTheDocument();
  expect(screen.getByText(/Add alt text to images./i)).toBeInTheDocument();
  expect(screen.getByText(/Color Contrast Issue/i)).toBeInTheDocument();
  expect(screen.getByText(/Ensure sufficient contrast between text and background./i)).toBeInTheDocument();
});
