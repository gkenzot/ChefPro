// src/pages/Admin/EditarReceita/EditarReceita.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReceitaById, updateReceita } from '../../../data/receitasService';
import '../NovaReceita/NovaReceita.css';

export default function EditarReceita() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [receita, setReceita] = useState({
    nome: '',
    autor: '',
    ingredientes: [''],
    modo_de_preparo: '',
    tempo_total: ''
  });
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarReceita = () => {
      const receitaEncontrada = getReceitaById(id);
      
      if (receitaEncontrada) {
        setReceita(receitaEncontrada);
      } else {
        alert('Receita não encontrada!');
        navigate('/admin/lista');
      }
      setCarregando(false);
    };

    carregarReceita();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceita(prev => ({ ...prev, [name]: value }));
  };

  const handleIngredienteChange = (index, value) => {
    const newIngredientes = [...receita.ingredientes];
    newIngredientes[index] = value;
    setReceita(prev => ({ ...prev, ingredientes: newIngredientes }));
  };

  const addIngrediente = () => {
    setReceita(prev => ({ ...prev, ingredientes: [...prev.ingredientes, ''] }));
  };

  const removeIngrediente = (index) => {
    const newIngredientes = receita.ingredientes.filter((_, i) => i !== index);
    setReceita(prev => ({ ...prev, ingredientes: newIngredientes }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      const atualizou = updateReceita(id, receita);
      
      if (atualizou) {
        alert('Receita atualizada com sucesso!');
        navigate('/admin/lista');
      } else {
        throw new Error('Falha ao atualizar receita');
      }
    } catch (error) {
      console.error('Erro ao salvar receita:', error);
      alert('Erro ao salvar alterações. Verifique o console para mais detalhes.');
    }
  };

  if (carregando) {
    return <div className="nova-receita-container">Carregando...</div>;
  }

  return (
    <div className="nova-receita-container">
      <h2>Editar Receita</h2>
      
      <form onSubmit={handleSubmit} className="receita-form">
        <div className="form-group">
          <label>Nome da Receita:</label>
          <input
            type="text"
            name="nome"
            value={receita.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Autor:</label>
          <input
            type="text"
            name="autor"
            value={receita.autor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredientes:</label>
          {receita.ingredientes.map((ingrediente, index) => (
            <div key={index} className="ingrediente-input">
              <input
                type="text"
                value={ingrediente}
                onChange={(e) => handleIngredienteChange(index, e.target.value)}
                required
              />
              {receita.ingredientes.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIngrediente(index)}
                  className="remove-ingrediente"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addIngrediente}
            className="add-ingrediente"
          >
            + Adicionar Ingrediente
          </button>
        </div>

        <div className="form-group">
          <label>Modo de Preparo:</label>
          <textarea
            name="modo_de_preparo"
            value={receita.modo_de_preparo}
            onChange={handleChange}
            required
            rows={6}
          />
        </div>

        <div className="form-group">
          <label>Tempo Total:</label>
          <input
            type="text"
            name="tempo_total"
            value={receita.tempo_total}
            onChange={handleChange}
            required
            placeholder="Ex: 30 minutos"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Salvar Alterações
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/lista')}
            className="cancel-btn"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}