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
import EditarReceita from "./pages/Admin/EditarReceita/EditarReceita";
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
    errorElement: <ErrorBoundary />,
    children: [
      { 
        index: true, 
        element: <Home />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "receitas", 
        element: <Receitas />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "receitas/:id", 
        element: <ReceitaDetalhes />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "login", 
        element: <Login />,
        errorElement: <ErrorBoundary />
      },
      
      // Rotas protegidas (admin)
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        errorElement: <ErrorBoundary />,
        children: [
          { 
            path: "lista", 
            element: <ListaReceitas />,
            errorElement: <ErrorBoundary />
          },
          { 
            path: "nova", 
            element: <NovaReceita />,
            errorElement: <ErrorBoundary />
          },
          { 
            path: "editar/:id", 
            element: <EditarReceita />,
            errorElement: <ErrorBoundary />
          },
        ],
      },
    ],
  },
]);

export default router;