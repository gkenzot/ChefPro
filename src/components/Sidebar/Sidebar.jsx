import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menu Admin</h3>
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li>
            <NavLink 
              to="/admin" 
              end
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Usuário
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/lista" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Gerenciar Receitas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/nova" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Criar Receita
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}