
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main accessibility checker header', () => {
    render(<App />);
    expect(screen.getByText(/accessibility checker/i)).toBeInTheDocument();
  });

  it('renders the FileUploader component', () => {
    render(<App />);
    expect(screen.getByText(/upload/i)).toBeInTheDocument();
  });
});
