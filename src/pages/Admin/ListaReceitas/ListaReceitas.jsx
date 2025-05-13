import { Link } from 'react-router-dom';
import receitasData from '../../../data/database.json';
import './ListaReceitas.css';

export default function ListaReceitas() {
  const { receitas } = receitasData;

  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta receita?')) {
      console.log(`Receita com ID ${id} seria excluída`);
    }
  };

  return (
    <div className="receitas-container">
      <div className="receitas-header">
        <h2>Gerenciar Receitas</h2>
        <Link to="/admin/receitas/nova" className="ver-receita-btn">
          + Nova Receita
        </Link>
      </div>
      
      <div className="receitas-grid">
        {receitas.map(receita => (
          <div key={receita.id} className="receita-card">
            <h3>{receita.nome}</h3>
            <p>Por: {receita.autor}</p>
            <p>Tempo: {receita.tempo_total}</p>
            
            <div className="receita-actions">
              <Link 
                to={`/receitas/${receita.id}`} 
                className="ver-receita-btn"
              >
                Visualizar
              </Link>
              <Link 
                to={`/admin/receitas/editar/${receita.id}`} 
                className="ver-receita-btn editar-btn"
              >
                Editar
              </Link>
              <button 
                onClick={() => handleExcluir(receita.id)} 
                className="ver-receita-btn excluir-btn"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}