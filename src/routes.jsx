// src/routes.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import App from "./App";
import Home from "./pages/Home/Home";
import Receitas from "./pages/Receitas/Receitas";
import ReceitaDetalhes from "./pages/ReceitaDetalhes/ReceitaDetalhes";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import NovaReceita from "./pages/Admin/NovaReceita/NovaReceita";
import ListaReceitas from "./pages/Admin/ListaReceitas/ListaReceitas";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// Componente para proteger rotas
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />, // Adicionado aqui
    children: [
      { 
        index: true, 
        element: <Home />,
        errorElement: <ErrorBoundary /> // Opcional: por rota
      },
      { 
        path: "receitas", 
        element: <Receitas />,
        errorElement: <ErrorBoundary /> // Opcional: por rota
      },
      { 
        path: "receitas/:id", 
        element: <ReceitaDetalhes />,
        errorElement: <ErrorBoundary /> // Opcional: por rota
      },
      { 
        path: "login", 
        element: <Login />,
        errorElement: <ErrorBoundary /> // Opcional: por rota
      },
      
      // Rotas protegidas (admin)
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        errorElement: <ErrorBoundary />, // Para toda a seção admin
        children: [
          { 
            path: "lista", 
            element: <ListaReceitas />,
            errorElement: <ErrorBoundary /> // Opcional: por rota
          },
          { 
            path: "nova", 
            element: <NovaReceita />,
            errorElement: <ErrorBoundary /> // Opcional: por rota
          },
        ],
      },
    ],
  },
]);

export default router;