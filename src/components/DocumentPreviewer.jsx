import React from "react";

function DocumentPreviewer({ document }) {
  return (
    <div>
      <h2>Preview: {document.name}</h2>
      {/* You can add a PDF or text viewer here */}
    </div>
  );
}

export default DocumentPreviewer;
