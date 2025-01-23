import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Rag = () => {
  const [query, setQuery] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState("");
  const [selectedModel, setSelectedModel] = useState("4.0");

  // Allowed file types
  const allowedFileTypes = [
    "application/pdf", // PDF
    "application/vnd.ms-excel", // Excel (.xls)
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Excel (.xlsx)
    "application/msword", // Word (.doc)
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Word (.docx)
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const invalidFiles = files.filter(
      (file) => !allowedFileTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      setError(
        `Unsupported file(s): ${invalidFiles
          .map((file) => file.name)
          .join(", ")}. Please upload only PDF, Word, or Excel files.`
      );
    } else {
      setUploadedFiles([...uploadedFiles, ...files]);
      setError(""); // Clear error if all files are valid
    }
  };

  const handleSubmit = () => {
    console.log("Selected Model:", selectedModel);
    console.log("Query:", query);
    if (uploadedFiles.length > 0) {
      console.log("Uploaded Files:", uploadedFiles);
    }
    setQuery(""); 
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="container text-center p-4 bg-white rounded shadow">
      <h1 className="text-center mb-4">Document Query System</h1>

     
      <div className="mb-3">
        <label htmlFor="model-dropdown" className="form-label">
          Model:
        </label>
        <select
          id="model-dropdown"
          value={selectedModel}
          onChange={handleModelChange}
          className="form-select"
        >
          <option value="4.0">4.0</option>
          <option value="3.0">3.0</option>
          <option value="2.0">2.0</option>
        </select>
      </div>


      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
        <label htmlFor="file-upload" className="input-group-text">
          📎
        </label>
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          multiple
          onChange={handleFileUpload}
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          ➤
        </button>
      </div>


      {error && <div className="alert alert-danger">{error}</div>}

    
      <div>
        {uploadedFiles.map((file, index) => (
          <p key={index} className="mb-1">
            📄 {file.name}
          </p>
        ))}
      </div>


      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Important Information</h5>
          <p className="card-text">
            Ensure you upload only PDF, Word, or Excel files. For best results,
            use clear and concise queries.
          </p>
          <a href="#" className="btn btn-link">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rag;
