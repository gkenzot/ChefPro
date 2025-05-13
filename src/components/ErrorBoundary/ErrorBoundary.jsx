// src/components/ErrorBoundary/ErrorBoundary.jsx
import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div className="error-boundary">
      <h2>Ocorreu um erro!</h2>
      <p>{error.message}</p>
    </div>
  );
}