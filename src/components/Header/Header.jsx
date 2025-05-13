import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="orange-bg">
      <div className="header-container">
        <div className="brand-container">
          <img src="/images/pato.png" alt="ChefPro Logo" className="logo" />
          <h1>ChefPro</h1>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`header-right ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <nav className="main-nav">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to={user ? "/admin/lista" : "/receitas"} onClick={() => setMobileMenuOpen(false)}>Receitas</Link>
            {user && <Link to="/admin/nova" onClick={() => setMobileMenuOpen(false)}>Nova Receita</Link>}
          </nav>
          
          <nav className="auth-nav">
            {user ? (
              <>
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin</Link>
                <button onClick={handleLogout} className="logout-btn" title="Sair">
                  <FiLogOut size={20} />
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}