// src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "../data/usuarios.json";

// Cria o contexto
const AuthContext = createContext();

// Provedor que envolverá a aplicação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Login
  const login = (email, password) => {
    const usuario = usuarios.find(
      user => user.email === email && user.senha === password
    );
    
    if (usuario) {
      setUser(usuario);
      navigate("/admin");
    } else {
      alert("Credenciais inválidas!");
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};