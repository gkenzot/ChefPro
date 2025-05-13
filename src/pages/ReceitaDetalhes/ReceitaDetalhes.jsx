import { useParams } from 'react-router-dom';
import receitasData from '../../data/database.json';
import './ReceitaDetalhes.css';

export default function ReceitaDetalhes() {
  const { id } = useParams();
  const receita = receitasData.receitas.find(r => r.id === parseInt(id));

  if (!receita) {
    return <div>Receita não encontrada</div>;
  }

  return (
    <div className="receita-detalhes-container">
      <h2>{receita.nome}</h2>
      <p className="autor">Por: {receita.autor}</p>
      <p className="tempo">⏱️ {receita.tempo_total}</p>
      
      <div className="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          {receita.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
      
      <div className="preparo">
        <h3>Modo de Preparo</h3>
        <p>{receita.modo_de_preparo}</p>
      </div>
    </div>
  );
}