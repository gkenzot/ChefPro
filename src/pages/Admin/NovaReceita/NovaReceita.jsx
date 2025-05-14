// src/pages/Admin/NovaReceita/NovaReceita.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NovaReceita.css';

export default function NovaReceita() {
  const navigate = useNavigate();
  const [receita, setReceita] = useState({
    nome: '',
    autor: '',
    ingredientes: [''],
    modo_de_preparo: '',
    tempo_total: ''
  });

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
    
    // Simulando envio para a API
    const novaReceita = {
      ...receita,
      id: Math.floor(Math.random() * 10000) // ID temporário
    };

    console.log('Receita a ser enviada:', novaReceita);
    
    // Aqui você faria a chamada à API real:
    // fetch('http://localhost:3000/receitas', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(novaReceita)
    // })
    // .then(response => response.json())
    // .then(() => navigate('/admin/receitas'))
    // .catch(error => console.error('Erro:', error));

    // Redirecionamento temporário (simulado)
    alert('Receita cadastrada com sucesso! (simulação)');
    navigate('/admin/receitas');
  };

  return (
    <div className="nova-receita-container">
      <h2>Adicionar Nova Receita</h2>
      
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
            Salvar Receita
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