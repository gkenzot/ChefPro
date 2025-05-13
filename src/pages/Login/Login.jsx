import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-form-container">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input-group">
            <label htmlFor="email" className="auth-label">Email</label>
            <input
              type="email"
              id="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="auth-input-group">
            <label htmlFor="password" className="auth-label">Senha</label>
            <input
              type="password"
              id="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="auth-submit-btn">
            Entrar
          </button>
        </form>
        <p className="auth-alternate-action">
          <Link to="#" className="auth-link">Esqueceu a senha?</Link>
        </p>
      </div>
    </div>
  );
}