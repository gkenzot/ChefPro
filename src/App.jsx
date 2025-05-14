// src/App.jsx
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="app-layout">
        <Header />
        <main className="main-content">

          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;