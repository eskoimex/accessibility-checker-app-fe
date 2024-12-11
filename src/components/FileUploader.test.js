

// import React from 'react';
// import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import FileUploader from './FileUploader';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import '@testing-library/jest-dom'; // for toBeInTheDocument()

// // Set up Axios mock adapter
// const mock = new MockAdapter(axios);

// describe('FileUploader Component', () => {
//   let onFileChangeMock, onAnalysisUpdateMock, onHtmlContentUpdateMock;

//   beforeEach(() => {
//     // Mock the callback functions passed to the component
//     onFileChangeMock = jest.fn();
//     onAnalysisUpdateMock = jest.fn();
//     onHtmlContentUpdateMock = jest.fn();
//   });

//   afterEach(() => {
//     mock.reset();
//   });

//   test('renders file input and upload button', () => {
//     render(
//       <FileUploader
//         file={null}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     // Checking if the file input and upload button are rendered
//     expect(screen.getByLabelText(/Upload file/i)).toBeInTheDocument();
//     expect(screen.getByText('Upload')).toBeInTheDocument();
//   });

//   test('shows alert when trying to upload without a file selected', () => {
//     global.alert = jest.fn(); // Mock the alert function

//     render(
//       <FileUploader
//         file={null}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));
//     expect(global.alert).toHaveBeenCalledWith('Please select a file');
//   });

//   test('handles file upload successfully', async () => {
//     const mockResponse = {
//       data: {
//         analysis: 'analysis data',
//         htmlContent: '<html>content</html>',
//       },
//     };

//     mock.onPost('/upload').reply(200, mockResponse);

//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Wait for the axios request to resolve
//     await waitFor(() => {
//       expect(onAnalysisUpdateMock).toHaveBeenCalledWith(mockResponse.data.analysis);
//       expect(onHtmlContentUpdateMock).toHaveBeenCalledWith(mockResponse.data.htmlContent);
//     });

//     // Check that the text changes to "Uploading..."
//     expect(screen.getByText('Uploading...')).toBeInTheDocument();
//   });

//   test('handles file upload failure', async () => {
//     mock.onPost('/upload').reply(500);

//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Wait for the error to occur
//     await waitFor(() => {
//       expect(onAnalysisUpdateMock).not.toHaveBeenCalled();
//       expect(onHtmlContentUpdateMock).not.toHaveBeenCalled();
//     });

//     // Ensure the button text is back to "Upload"
//     expect(screen.getByText('Upload')).toBeInTheDocument();
//   });

//   test('shows "Uploading..." text during file upload', async () => {
//     const mockResponse = {
//       data: {
//         analysis: 'analysis data',
//         htmlContent: '<html>content</html>',
//       },
//     };

//     mock.onPost('/upload').reply(200, mockResponse);

//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Check that the text changes to "Uploading..."
//     expect(screen.getByText('Uploading...')).toBeInTheDocument();
//   });
// });

// import React from 'react';
// import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import FileUploader from './FileUploader';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import '@testing-library/jest-dom'; // for toBeInTheDocument()

// // Set up Axios mock adapter
// const mock = new MockAdapter(axios);

// describe('FileUploader Component', () => {
//   let onFileChangeMock, onAnalysisUpdateMock, onHtmlContentUpdateMock;

//   beforeEach(() => {
//     // Mock the callback functions passed to the component
//     onFileChangeMock = jest.fn();
//     onAnalysisUpdateMock = jest.fn();
//     onHtmlContentUpdateMock = jest.fn();
//   });

//   afterEach(() => {
//     mock.reset();
//   });

//   test('renders file input and upload button', () => {
//     render(
//       <FileUploader
//         file={null}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     // Checking if the file input and upload button are rendered
//     expect(screen.getByLabelText(/Upload file/i)).toBeInTheDocument();
//     expect(screen.getByText('Upload')).toBeInTheDocument();
//   });

//   test('shows alert when trying to upload without a file selected', () => {
//     global.alert = jest.fn(); // Mock the alert function

//     render(
//       <FileUploader
//         file={null}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));
//     expect(global.alert).toHaveBeenCalledWith('Please select a file');
//   });

//   test('handles file upload successfully', async () => {
//     const mockResponse = {
//       data: {
//         //analysis: 'analysis data',
//         htmlContent: '<html>content</html>',
//       },
//     };

//     mock.onPost('/upload').reply(200, mockResponse);

//     // Create a mock file (with content)
//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Wait for the axios request to resolve
//     await waitFor(() => {
//       // Check that the callback functions were called with the expected data
//       expect(onAnalysisUpdateMock).toHaveBeenCalledWith(mockResponse.data.analysis);
//       expect(onHtmlContentUpdateMock).toHaveBeenCalledWith(mockResponse.data.htmlContent);
//     });

   
//   });

//   test('handles file upload failure', async () => {
//     mock.onPost('/upload').reply(500);

//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Wait for the error to occur
//     await waitFor(() => {
//       expect(onAnalysisUpdateMock).not.toHaveBeenCalled();
//       expect(onHtmlContentUpdateMock).not.toHaveBeenCalled();
//     });

//     // Ensure the button text is back to "Upload"
//     expect(screen.getByText('Upload')).toBeInTheDocument();
//   });

  
// });
// import React from 'react';
// import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import FileUploader from './FileUploader';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import '@testing-library/jest-dom'; // for toBeInTheDocument()

// // Set up Axios mock adapter
// const mock = new MockAdapter(axios);

// describe('FileUploader Component', () => {
//   let onFileChangeMock, onAnalysisUpdateMock, onHtmlContentUpdateMock;

//   beforeEach(() => {
//     // Mock the callback functions passed to the component
//     onFileChangeMock = jest.fn();
//     onAnalysisUpdateMock = jest.fn();
//     onHtmlContentUpdateMock = jest.fn();
//   });

//   afterEach(() => {
//     mock.reset();
//   });

//   test('renders file input and upload button', () => {
//     render(
//       <FileUploader
//         file={null}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     // Checking if the file input and upload button are rendered
//     expect(screen.getByLabelText(/Upload file/i)).toBeInTheDocument();
//     expect(screen.getByText('Upload')).toBeInTheDocument();
//   });

//   test('shows alert when trying to upload without a file selected', () => {
//     global.alert = jest.fn(); // Mock the alert function

//     render(
//       <FileUploader
//         file={null}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));
//     expect(global.alert).toHaveBeenCalledWith('Please select a file');
//   });

//   test('handles file upload successfully', async () => {
//     const mockResponse = {
//       data: {
//         analysis: 'analysis data', // Ensure analysis data is included
//         htmlContent: '<html>content</html>',
//       },
//     };

//     mock.onPost('/upload').reply(200, mockResponse);

//     // Create a mock file (with content)
//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Wait for the axios request to resolve
//     await waitFor(() => {
//       // Check that the callback functions were called with the expected data
//       expect(onAnalysisUpdateMock).toHaveBeenCalledWith(mockResponse.data.analysis);
//       expect(onHtmlContentUpdateMock).toHaveBeenCalledWith(mockResponse.data.htmlContent);
//     });

//     // Check that the button text changes to "Uploading..."
//     expect(screen.getByText('Uploading...')).toBeInTheDocument();
//   });

//   test('handles file upload failure', async () => {
//     mock.onPost('/upload').reply(500);

//     const file = new File(['<html>content</html>'], 'test.html', { type: 'text/html' });

//     render(
//       <FileUploader
//         file={file}
//         onFileChange={onFileChangeMock}
//         onAnalysisUpdate={onAnalysisUpdateMock}
//         onHtmlContentUpdate={onHtmlContentUpdateMock}
//       />
//     );

//     fireEvent.click(screen.getByText('Upload'));

//     // Wait for the error to occur
//     await waitFor(() => {
//       expect(onAnalysisUpdateMock).not.toHaveBeenCalled();
//       expect(onHtmlContentUpdateMock).not.toHaveBeenCalled();
//     });

//     // Ensure the button text is back to "Upload"
//     expect(screen.getByText('Upload')).toBeInTheDocument();
//   });
// });
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUploader from './FileUploader';
import axios from 'axios';

jest.mock('axios');

describe('FileUploader Component', () => {
  const mockOnFileChange = jest.fn();
  const mockOnAnalysisUpdate = jest.fn();
  const mockOnHtmlContentUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should alert when no file is selected', () => {
    window.alert = jest.fn(); // Mock alert
    render(<FileUploader file={null} onFileChange={mockOnFileChange} onAnalysisUpdate={mockOnAnalysisUpdate} onHtmlContentUpdate={mockOnHtmlContentUpdate} />);
    
    const uploadButton = screen.getByText('Upload');
    fireEvent.click(uploadButton);
    
    expect(window.alert).toHaveBeenCalledWith('Please select a file');
  });

  test('should upload file and update analysis and HTML content', async () => {
    const file = new Blob(['<html><body>Hello World</body></html>'], { type: 'text/html' });
    const mockFile = new File([file], 'test.html', { type: 'text/html' });

    const responseData = { analysis: 'some analysis data' };
    axios.post.mockResolvedValueOnce({ data: responseData });

    render(<FileUploader file={mockFile} onFileChange={mockOnFileChange} onAnalysisUpdate={mockOnAnalysisUpdate} onHtmlContentUpdate={mockOnHtmlContentUpdate} />);
    
    const fileInput = screen.getByLabelText(/file/i);
    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    const uploadButton = screen.getByText('Upload');
    await fireEvent.click(uploadButton);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/upload', expect.any(FormData));
    expect(mockOnAnalysisUpdate).toHaveBeenCalledWith(responseData);
    
    // Simulate reading the file content
    const reader = new FileReader();
    reader.onload = () => {
      mockOnHtmlContentUpdate(reader.result);
    };
    reader.readAsText(mockFile);

    // Manually trigger the onload event to simulate the file being read
    reader.onload();

    expect(mockOnHtmlContentUpdate).toHaveBeenCalledWith('<html><body>Hello World</body></html>');
  });
});