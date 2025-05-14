// src/data/receitasService.js
import dadosIniciais from './database.json';

const LOCAL_STORAGE_KEY = 'receitasAppData';

// Inicializa o LocalStorage
const inicializarLocalStorage = () => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dadosIniciais.receitas));
  }
};

// Gera um ID único
const gerarNovoId = (receitas) => {
  return receitas.length > 0 ? Math.max(...receitas.map(r => r.id)) + 1 : 1;
};

// Busca todas as receitas
export const getReceitas = () => {
  inicializarLocalStorage();
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
};

// Busca uma receita por ID
export const getReceitaById = (id) => {
  const receitas = getReceitas();
  return receitas.find(r => r.id === parseInt(id));
};

// Adiciona uma nova receita
export const createReceita = (novaReceita) => {
  const receitas = getReceitas();
  const novoId = gerarNovoId(receitas);
  
  const receitaCompleta = {
    ...novaReceita,
    id: novoId
  };
  
  const novasReceitas = [...receitas, receitaCompleta];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(novasReceitas));
  return receitaCompleta;
};

// Atualiza uma receita
export const updateReceita = (id, novosDados) => {
  const receitas = getReceitas();
  const index = receitas.findIndex(r => r.id === parseInt(id));
  
  if (index !== -1) {
    receitas[index] = { ...receitas[index], ...novosDados };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(receitas));
    return true;
  }
  return false;
};

// Remove uma receita
export const deleteReceita = (id) => {
  const receitas = getReceitas();
  const novasReceitas = receitas.filter(r => r.id !== parseInt(id));
  
  if (novasReceitas.length < receitas.length) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(novasReceitas));
    return true;
  }
  return false;
};