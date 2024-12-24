import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileUploader from './FileUploader';

test('renders the file uploader component', () => {
  render(
    <FileUploader
      file={null}
      onFileChange={jest.fn()}
      onAnalysisUpdate={jest.fn()}
      onHtmlContentUpdate={jest.fn()}
    />
  );

  expect(screen.getByText(/Upload an HTML file to start analysing/i)).toBeInTheDocument();
});



