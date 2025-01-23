import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useApi from "../useApi"; // Import the custom hook

const Rag = () => {
  const [query, setQuery] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState("");
  const [selectedModel, setSelectedModel] = useState("4.0");

  const { loading, error: apiError, response, postData } = useApi(); // Use the custom hook

  const allowedFileTypes = [
    "application/pdf", // PDF
    // "application/vnd.ms-excel", // Excel (.xls)
    // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Excel (.xlsx)
    // "application/msword", // Word (.doc)
    // "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Word (.docx)
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
          .join(", ")}. Please upload only PDF file.`
      );
    } else {
      setUploadedFiles([...uploadedFiles, ...files]);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!query) {
      setError("Query cannot be empty.");
      return;
    }
    // if (uploadedFiles.length === 0) {
    //   setError("Please upload at least one file.");
    //   return;
    // }

    setError("");

    const formData = new FormData();
    formData.append("query", query);
    formData.append("model", selectedModel);
    uploadedFiles.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    await postData("https://your-api-endpoint.com/analyze", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="text-center p-4 rounded">
      <h1 className="text-center mb-4">Retrieval-Augmented Generation</h1>
      <br />
      <br />
      <br />
      <div className="mb-3">
        <div className="row align-items-center">
          <label htmlFor="model-dropdown" className="col-auto col-form-label">
            Model:
          </label>
          <div className="col">
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
        </div>
      </div>

      <div className="input-group mb-3">
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
        <input
          type="text"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
        
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          disabled={loading}
        >
          ➤
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {apiError && <div className="alert alert-danger">{apiError}</div>}

      <div>
        {uploadedFiles.map((file, index) => (
          <p key={index} className="mb-1">
            📄 {file.name}
          </p>
        ))}
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">API Response</h5>
          {loading ? (
            <p>Loading...</p>
          ) : response ? (
            <p>{JSON.stringify(response)}</p>
          ) : (
            <p>No response yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rag;
