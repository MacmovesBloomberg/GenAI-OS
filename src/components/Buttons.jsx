import React from "react";

function Buttons() {
  return (
    <div className="d-flex justify-content-end gap-2">
      <button className="btn btn-secondary">Clear</button>
      <button className="btn btn-primary">Summarize</button>
      <button className="btn btn-success">RAG</button>
    </div>
  );
}

export default Buttons;
