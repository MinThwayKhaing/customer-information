
import React from 'react';

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  buttonText: string;
  noFileText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  disabled?: boolean;
}

const UploadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);


const FileUpload: React.FC<FileUploadProps> = ({ id, name, buttonText, noFileText, onChange, file, disabled = false }) => {
  const fileInputId = id || `file-upload-${name}`;

  return (
    <div className={`flex items-center w-full ${disabled ? 'opacity-60' : ''}`}>
      <label
        htmlFor={!disabled ? fileInputId : undefined}
        className={`cursor-pointer inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-l-lg border border-gray-300 dark:border-gray-500 transition-colors duration-200 ${disabled ? 'cursor-not-allowed' : 'hover:bg-gray-300 dark:hover:bg-gray-500'}`}
      >
        <UploadIcon />
        {buttonText}
      </label>
      <input
        id={fileInputId}
        name={name}
        type="file"
        className="sr-only"
        onChange={onChange}
        disabled={disabled}
      />
      <span className="flex-1 p-[9px] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-r-lg border border-l-0 border-gray-300 dark:border-gray-600 truncate">
        {file ? file.name : noFileText}
      </span>
    </div>
  );
};

export default FileUpload;