import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Admin.css';

export default function Admin() {
  const { user } = useAuth();
  const location = useLocation();

  // Verifica se a rota atual é a página principal do admin
  const isAdminHome = location.pathname === '/admin';

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-content">
        {isAdminHome && (
          <div className="user-info-card">
            <h2>Informações do Administrador</h2>
            <div className="user-details">
              <p><span>Nome:</span> {user?.nome}</p>
              <p><span>Email:</span> {user?.email}</p>
              <p><span>Username:</span> {user?.username}</p>
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}