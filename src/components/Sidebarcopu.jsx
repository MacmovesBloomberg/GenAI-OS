import React from "react";

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
      <h4 className="mb-4">Menu</h4>
      <ul className="list-unstyled">
        <li className="mb-3">
          <a href="#dashboard" className="text-white text-decoration-none">
            Dashboard
          </a>
        </li>
        <li className="mb-3">
          <a href="#tools" className="text-white text-decoration-none">
            Tools
          </a>
          <ul className="list-unstyled ms-3">
            <li className="mb-2">
              <a href="#summarization" className="text-white text-decoration-none">
                Summarization
              </a>
            </li>
            <li>
              <a href="#rag" className="text-white text-decoration-none">
                RAG
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
