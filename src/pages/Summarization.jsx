import React from "react";

const Summarization = () => {
  return (
    <div>
      <div className="input-group mb-3" style={{border:"2px solid red"}}>
        <input type="file" className="form-control" id="inputGroupFile02" />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>
    </div>
  );
};

export default Summarization;
