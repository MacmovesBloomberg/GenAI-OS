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
          <li className="nav-item" style={{fontSize: "1.5rem"}}>
            <NavLink to="/" className="nav-link ">
              SAAS
            </NavLink>
          </li>
          <li className="nav-item" style={{fontSize: "1.5rem"}}>
            <NavLink to="/Rag" className="nav-link">
              RAG
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
