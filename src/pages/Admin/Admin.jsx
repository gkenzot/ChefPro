// src/pages/Admin/Admin.jsx
import { Link, Outlet } from 'react-router-dom'; // Adicionei a importação do Link

export default function Admin() {
  return (
    <div className="admin-container">
      {/* <h2>Área Administrativa</h2>
      <nav className="admin-nav">
        <Link to="/admin/lista">Lista de Receitas</Link>
        <Link to="/admin/nova">Nova Receita</Link>
      </nav> */}
      <Outlet />
    </div>
  );
}