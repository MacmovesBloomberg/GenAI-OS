import React, { useState } from "react";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="container mt-5">
      <p className="text-center text-muted">
        Please Note: Drag & Drop won't work on most smartphone devices
      </p>
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div
          className={`card-body text-center p-4 border ${
            dragActive ? "border-primary" : "border-secondary"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <h5 className="card-title mb-3">Upload your files</h5>
          <p className="text-muted">Files can be JPG, JPEG, PNG or anything</p>
          <div
            className="border rounded d-flex flex-column align-items-center justify-content-center"
            style={{
              borderStyle: "dashed",
              height: "150px",
              backgroundColor: dragActive ? "#f0f8ff" : "#f9f9f9",
            }}
          >
            <img
              src="https://img.icons8.com/color/48/000000/folder-invoices.png"
              alt="Upload Icon"
              className="mb-2"
            />
            <p className="mb-0">Drag & Drop files here.</p>
          </div>
          <input
            type="file"
            className="form-control mt-3"
            onChange={handleFileChange}
          />
          {fileName && (
            <p className="mt-2 text-primary">
              <strong>Uploaded File:</strong> {fileName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
