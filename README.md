# ChefPro - Site de Receitas Culinárias

## Descrição
ChefPro é um site de receitas culinárias onde usuários podem visualizar diversas receitas, mas apenas administradores têm permissão para gerenciá-las (criar, editar e excluir).

## Funcionalidades
- Visualização de receitas (público)
- Sistema de login para administradores
- Gerenciamento de receitas (apenas para administradores)

## Páginas
### Públicas:
- **Home** - Página inicial
- **Receitas** - Lista de todas as receitas
- **Receitas/:id** - Detalhes de uma receita específica
- **Login** - Área de autenticação para administradores

### Privadas (requer login):
- **Admin** - Informações sobre o usuário
- **Admin/Lista** - Lista de receitas para gerenciamento
- **Admin/Nova Receita** - Formulário para cadastrar novas receitas

## Tecnologias Utilizadas
- React
- React Router (useNavigate, useParams)
- Node.js
- NPM

## Instalação e Execução

### Pré-requisitos
1. Instale o Node.js (que inclui o NPM):
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Recomendado versão LTS

### Passos para execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/gkenzot/ChefPro.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd ChefPro
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse o site no navegador:
   [http://localhost:5173/](http://localhost:5173/)

## Pontos importantes da atividade
O hook useNavigate é utilizado principalmente no componente Header para navegação entre páginas
O hook useParams é utilizado no cadastro de novas receitas para manipulação de parâmetros