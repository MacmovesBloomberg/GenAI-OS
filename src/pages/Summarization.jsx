import React, { useState } from "react";
import useAPI from "../useApi"

const Summarization = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  // Allowed file types
  const allowedFileTypes = [
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const { postData } = useAPI();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        setError(`Unsupported file type: ${file.name}. Please upload PDF, Word, or Excel files.`);
        setUploadedFile(null);
      } else {
        setUploadedFile(file);
        setError(""); // Clear any existing error
      }
    }
  };

  const handleSubmit = async () => {
    if (!uploadedFile) {
      setError("Please upload a valid file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const res = await postData("/api/summarization", formData);
      setResponse(res.data); // Assuming response.data contains the API response
    } catch (err) {
      console.error("Error during API call:", err);
      setError("Failed to process the file. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Summarization</h1>
      <div className="input-group mb-3" style={{ border: "2px solid red" }}>
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          onChange={handleFileUpload}
        />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {response && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Summarization Result</h5>
            <p className="card-text">{response.summary}</p> {/* Assuming API returns "summary" */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Summarization;
