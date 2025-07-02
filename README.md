
---

````markdown
# Projeto Consumo de API de Filmes com React

Este projeto é um aplicativo React que consome a API do [The Movie Database (TMDb)](https://www.themoviedb.org/) para listar filmes populares e exibir detalhes individuais. Feito com React, usando Vite para build rápido e React Router para navegação.

---

## Tecnologias

- [React](https://react.dev/) — biblioteca para interfaces modernas.
- [Vite](https://vitejs.dev/) — build ultra rápido.
- [React Router DOM](https://reactrouter.com/) — para navegação SPA (Single Page Application).
- [Tailwind CSS](https://tailwindcss.com/) — para estilização moderna (opcional, se você usou).

---

### 2Inicializar o repositório Git

```bash
git init
```

Ou se for clonar um repositório existente:

```bash
git clone https://github.com/Davlkk/API-Filmes-React.git
cd API-Filmes-React
```

### 3Instalar as dependências

```bash
npm install
```

##  Como rodar o projeto

No diretório do projeto, execute:

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:5173
```

---

## Estrutura do projeto

```
src/
├─ components/
│  └─ Container.jsx
│  ├─ Header.jsx
│  ├─ ListMovies.jsx
│  └─ Movie.jsx
├─ pages/
│  └─ Details.jsx
│  └─ Home.jsx
├─ api/
│  └─ movieApi.js
├─ App.jsx
├─ App.css
└─ main.jsx
```

---

## Funcionalidades

Listagem filmes populares consumindo a API do TMDb
Exibir detalhes de cada filme ao clicar no card
Navegação SPA com React Router
Estilização moderna com Tailwind CSS
Página de detalhes com gradiente e banner impactante

---

## Scripts disponíveis

* **`npm run dev`** — inicia o servidor de desenvolvimento
* **`npm run build`** — gera o build de produção
* **`npm run preview`** — visualiza o build localmente

---

## Licença

Este projeto é open-source e você pode usá-lo como quiser.


```
