import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-nav">
          <li>
            <NavLink 
              to="/admin/lista" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Lista de Receitas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/nova" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Nova Receita
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}