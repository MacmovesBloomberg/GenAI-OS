import React, { useState } from "react";

function DragDropArea() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileInput = (event) => {
    const uploadedFile = event.target.files[0];
    validateFile(uploadedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const validateFile = (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setFile(null);
    } else {
      setError("");
      setFile(file);
    }
  };

  const handleClear = () => {
    setFile(null);
    setError("");
  };

  return (
    <div>
      <div
        className="border p-5 d-flex flex-column justify-content-center align-items-center mb-4"
        style={{
          height: "300px",
          borderStyle: "dashed",
          backgroundColor: "#f8f9fa",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {file ? (
          <p className="text-success mb-3">Uploaded: {file.name}</p>
        ) : (
          <p className="text-muted mb-3">Drag & Drop Your PDF File Here</p>
        )}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileInput}
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="btn btn-primary">
          Upload File
        </label>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {file && (
        <button className="btn btn-secondary mt-3" onClick={handleClear}>
          Clear File
        </button>
      )}
    </div>
  );
}

export default DragDropArea;
