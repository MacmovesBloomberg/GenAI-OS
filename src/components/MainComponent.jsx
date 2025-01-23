import React, { useState } from "react";
import fileicon from "../assets/images/fileicon.png";

const MainContent = () => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("PDF");

  const MAX_FILE_SIZE_MB = 5;

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setFile(null);
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(`File size must not exceed ${MAX_FILE_SIZE_MB} MB.`);
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleClear = () => {
    setFile(null);
    setError("");
  };

  const handleSummarize = () => {
    if (file) {
      console.log("File to summarize:", file);
    } else {
      setError("No file uploaded. Please upload a PDF to summarize.");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "URL":
        return <p>URL content goes here.</p>;
      case "Text":
        return <p>Text content goes here.</p>;
      case "PDF":
        return (
          <div
            className={`drag-drop-area rounded p-4 text-center bg-white d-flex flex-column align-items-center justify-content-center ${
              dragOver ? "border-primary bg-light" : "border-secondary"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              borderStyle: "dashed",
              height: "60%",
            }}
          >
            <img src={fileicon} alt="nmlogo" className="h-25" />
            <h4>Click or Drop File</h4>
            <p>
              Only PDF files under {MAX_FILE_SIZE_MB} MB are allowed. Once the
              summary has been generated, your file will be deleted
              automatically.
            </p>
            <input
              type="file"
              id="fileInput"
              hidden
              onChange={handleFileSelect}
            />
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Select File
            </button>

            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}

            {file && (
              <div className="mt-3">
                <div className="alert alert-secondary d-flex justify-content-between align-items-center">
                  <span className="inline-block mx-2">{file.name}</span>
                  <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                </div>
                <button
                  className="btn btn-warning me-2"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleSummarize}
                >
                  Summarize
                </button>
              </div>
            )}
          </div>
        );
      case "Audio":
        return <p>Audio content goes here.</p>;
      case "Youtube":
        return <p>YouTube content goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="main-content flex-grow-1 p-4">
      <h2>Content Summarizer</h2>
      <h5 className="mb-4">Get the gist of any content with one click!</h5>
      <div
        className="bg-white p-4 rounded border"
        style={{ width: "80vw", height: "80vh" }}
      >
        {/* Tab List */}
        <div
          className="nav nav-pills d-inline-flex flex-row align-items-start p-2 my-4"
          style={{ backgroundColor: "lightgray" }}
        >
          {["URL", "Text", "PDF", "Audio", "Youtube"].map((tab) => (
            <li
              key={tab}
              className={`nav-item nav-link m-2 ${
                activeTab === tab ? "active bg-primary text-white" : ""
              }`}
              onClick={() => setActiveTab(tab)}
              style={{
                cursor: "pointer",
                borderRadius: "20px",
                padding: "10px 15px",
              }}
            >
              {tab}
            </li>
          ))}
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
