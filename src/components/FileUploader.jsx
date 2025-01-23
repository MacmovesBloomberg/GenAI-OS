import React from "react";

function FileUploader({ onFileUpload }) {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    onFileUpload(files);
  };

  return (
    <div>
      <h2>Upload Documents</h2>
      <input type="file" multiple onChange={handleFileChange} />
    </div>
  );
}

export default FileUploader;
