import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import nmlogo from "../assets/images/NMlogo.png";
import "../App.css";

const Sidebar = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  return (
    <div className="sidebar bg-light text-black p-3" style={{ width: "250px" }}>
      <img src={nmlogo} alt="nmlogo" className="h-10 mb-4" />

      <h5>Dashboard</h5>

      {/* Tools */}
      <div>
        <div
          className="d-flex justify-content-between align-items-center text-black py-2 px-3 rounded mb-2 sidebar-item"
          onClick={toggleTools}
          style={{ cursor: "pointer" }}
        >
          Tools
          <span>{isToolsOpen ? "▲" : "▼"}</span>
        </div>
        {isToolsOpen && (
          <ul className="list-unstyled ps-4">
            <li>
              <NavLink
                to="/tools/summarizer"
                className={({ isActive }) =>
                  `text-decoration-none d-block py-1 ${
                    isActive ? "text-primary" : "text-black"
                  }`
                }
              >
                Summarizer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tools/rag"
                className={({ isActive }) =>
                  `text-decoration-none d-block py-1 ${
                    isActive ? "text-primary" : "text-black"
                  }`
                }
              >
                RAG
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Collections */}
      <NavLink
        to="/collections"
        className={({ isActive }) =>
          `text-decoration-none text-black d-block py-2 px-3 rounded mb-2 ${
            isActive ? "bg-primary text-white" : "sidebar-item"
          }`
        }
      >
        Collections
      </NavLink>

      {/* Invite Friends */}
      <NavLink
        to="/invite-friends"
        className={({ isActive }) =>
          `text-decoration-none text-black d-block py-2 px-3 rounded mb-2 ${
            isActive ? "bg-primary text-white" : "sidebar-item"
          }`
        }
      >
        Invite Friends
      </NavLink>

      {/* Logout */}
      <NavLink
        to="/logout"
        className={({ isActive }) =>
          `text-decoration-none text-black d-block py-2 px-3 rounded ${
            isActive ? "bg-primary text-white" : "sidebar-item"
          }`
        }
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
