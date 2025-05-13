import { Link } from 'react-router-dom';
import receitasData from '../../data/database.json';
import './Receitas.css';

export default function Receitas() {
  const { receitas } = receitasData;

  return (
    <div className="receitas-container">
      <h2>Nossas Receitas</h2>
      <div className="receitas-grid">
        {receitas.map(receita => (
          <div key={receita.id} className="receita-card">
            <h3>{receita.nome}</h3>
            <p>Por: {receita.autor}</p>
            <p>Tempo: {receita.tempo_total}</p>
            <Link to={`/receitas/${receita.id}`} className="ver-receita-btn">
              Ver Receita
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}