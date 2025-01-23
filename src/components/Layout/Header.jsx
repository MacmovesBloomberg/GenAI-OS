import { NavLink } from "react-router-dom";
import "../../App.css";

export const Header = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      {/* <header>
        <div>
          <ul>
            <li>
              <NavLink to="/">Summarization</NavLink>
            </li>
            <li>
              <NavLink to="/Rag">RAG</NavLink>
            </li>
          </ul>
        </div>
      </header> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul>
            <li>
              <NavLink to="/" clas>Summarization</NavLink>
            </li>
            <li>
              <NavLink to="/Rag">RAG</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};
