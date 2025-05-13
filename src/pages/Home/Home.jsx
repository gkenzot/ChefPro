import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1>Bem-vindo ao ChefPro</h1>
        <p>Descubra receitas incríveis para todas as ocasiões</p>
        <Link to="/receitas" className="cta-button">
          Explorar Receitas
        </Link>
      </div>
    </div>
  );
}