import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Camera, Smartphone } from 'lucide-react';
import { useAvatar } from '../../context/AvatarContext';

const BodyScanUpload: React.FC = () => {
  const { setIsBodyScanUploaded, setAvatarImage } = useAvatar();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check file size
    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      setErrorMessage('File size exceeds 50MB limit. Please compress your scan file.');
      setUploadStatus('error');
      return;
    }

    // Check if file is a 3D scan format or image
    const validFormats = ['obj', 'fbx', 'glb', 'jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    if (!fileExtension || !validFormats.includes(fileExtension)) {
      setErrorMessage('Please upload a valid 3D scan file (OBJ, FBX, GLB) or high-quality images (JPG, PNG)');
      setUploadStatus('error');
      return;
    }

    setUploadStatus('loading');

    // Simulate file processing
    setTimeout(() => {
      // Create a URL for the preview
      const previewUrl = URL.createObjectURL(file);
      
      // In a real app, you would send this to a server for processing
      setAvatarImage(previewUrl);
      setIsBodyScanUploaded(true);
      setUploadStatus('success');
    }, 2500);
  };

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
        } ${uploadStatus === 'success' ? 'bg-green-50 border-green-500' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {uploadStatus === 'idle' && (
          <>
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-800 font-medium mb-2">Upload your 3D body scan</p>
            <p className="text-gray-600 mb-4">Drag and drop your scan file here</p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">3D Scan</span>
              </div>
              <div className="h-4 border-r border-gray-300"></div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">Phone Scan</span>
              </div>
            </div>

            <label className="bg-indigo-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
              <Upload className="w-5 h-5" />
              <span>Choose File</span>
              <input
                type="file"
                accept=".obj,.fbx,.glb,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileInput}
              />
            </label>

            <div className="mt-6 text-sm text-gray-500">
              <p className="font-medium mb-2">Supported formats:</p>
              <ul className="space-y-1">
                <li>3D Scans: OBJ, FBX, GLB</li>
                <li>Images: JPG, PNG</li>
                <li>Maximum file size: 50MB</li>
              </ul>
            </div>
          </>
        )}

        {uploadStatus === 'loading' && (
          <div className="py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-indigo-600 font-medium">Processing your body scan...</p>
            <p className="text-gray-500 text-sm mt-2">This may take a few moments</p>
          </div>
        )}

        {uploadStatus === 'success' && (
          <div className="py-8">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-green-600 font-medium mb-2">Scan uploaded successfully!</p>
            <p className="text-gray-600 mb-4">Your 3D avatar has been created.</p>
            <button
              className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              onClick={() => setUploadStatus('idle')}
            >
              Upload another scan
            </button>
          </div>
        )}

        {uploadStatus === 'error' && (
          <div className="py-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 font-medium mb-2">Upload failed</p>
            <p className="text-gray-600 mb-4">{errorMessage}</p>
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={() => setUploadStatus('idle')}
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyScanUpload;