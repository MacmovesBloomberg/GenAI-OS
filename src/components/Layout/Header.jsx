import { NavLink } from "react-router-dom";
import "../../App.css";

export const Header = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">
              Summarization
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Rag" className="nav-link active">
              RAG
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
