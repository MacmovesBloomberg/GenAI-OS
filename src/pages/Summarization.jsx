import { useState } from "react";
import useAPI from "../useApi";
import FileUpload from "../components/FileUpload";

const Summarization = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const allowedFileTypes = [
    "application/pdf",
    // "application/vnd.ms-excel",
    // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    // "application/msword",
    // "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const { postData,loading } = useAPI();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        // setError(`Unsupported file type: ${file.name}. Please upload PDF, Word, or Excel files.`);
        setError(
          `Unsupported file type: ${file.name}. Please upload PDF file.`
        );
        setUploadedFile(null);
      } else {
        setUploadedFile(file);
        setError("");
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

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      const res = await postData("/api/summarization", formData);
      setResponse(res.data);
    } catch (err) {
      console.error("Error during API call:", err);
      setError("Failed to process the file. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Summarization As A Service</h1>
      <br />
      <br />
      <br />
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={handleFileUpload}
        />
        {uploadedFile && (
          <p className="mt-2">
            <strong>Uploaded File:</strong> {uploadedFile.name}
          </p>
        )}
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Upload
        </button>
      </div>
      {/* <FileUpload /> */}

      {/* {response && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Summarization Result</h5>
            <p className="card-text">{response.summary}</p>
          </div>
        </div>
      )} */}
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

export default Summarization;
