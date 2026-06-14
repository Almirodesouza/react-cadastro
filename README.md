# 📋 React Cadastro de Usuários

Aplicação web fullstack para **cadastro, listagem e exclusão de usuários**, desenvolvida com React no frontend e integrada a uma API REST no backend.

---

## 🛠️ Tecnologias utilizadas

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

| Tecnologia | Descrição |
|-----------|-----------|
| **React** | Biblioteca para construção de interfaces |
| **Vite** | Bundler e servidor de desenvolvimento ultrarrápido |
| **React Router DOM** | Gerenciamento de rotas SPA |
| **Styled Components** | Estilização com CSS-in-JS |
| **Axios** | Cliente HTTP para comunicação com a API |
| **Avatar API** | Geração dinâmica de avatares por ID de usuário |

---

## ✨ Funcionalidades

- ✅ Cadastro de usuários com **nome**, **idade** e **e-mail**
- ✅ Listagem de todos os usuários cadastrados
- ✅ **Exclusão** de usuários com atualização imediata da lista (sem reload)
- ✅ Avatar gerado dinamicamente para cada usuário
- ✅ Navegação entre páginas com React Router
- ✅ Integração com API REST via Axios
- ✅ Componentes reutilizáveis (`Button`, `Title`, `TopBackground`)
- ✅ Estilização com Styled Components
- ✅ Redirecionamento automático após cadastro
- ✅ Layout responsivo (mobile, tablet e desktop)

---

## 📁 Estrutura do projeto

```
react-cadastro/
├── public/
├── src/
│   ├── assets/
│   │   └── trash.svg               # Ícone de exclusão
│   ├── components/
│   │   ├── Button/
│   │   ├── Title/
│   │   └── TopBackground/
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.jsx           # Formulário de cadastro
│   │   │   └── styles.js           # Estilos da página Home
│   │   └── ListUsers/
│   │       ├── index.jsx           # Listagem e exclusão de usuários
│   │       └── styles.js           # Estilos da página ListUsers
│   ├── services/
│   │   └── api.js                  # Configuração do Axios
│   ├── App.jsx                     # Configuração de rotas
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm ou yarn
- API backend rodando localmente

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Almirodesouza/react-cadastro.git

# 2. Acesse a pasta do projeto
cd react-cadastro

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

> ⚠️ **Atenção:** o projeto consome uma API REST. Certifique-se de que o backend está rodando e que a URL base está corretamente configurada em `src/services/api.js`.

---

## 🔌 Configuração da API

O arquivo `src/services/api.js` configura o Axios com a URL base do backend:

```js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000' // altere conforme sua API
})

export default api
```

### Endpoints utilizados

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/usuarios` | Cadastra um novo usuário |
| `GET` | `/usuarios` | Retorna a lista de usuários |
| `DELETE` | `/usuarios/:id` | Remove um usuário pelo ID |

### Payload para cadastro (POST `/usuarios`)

```json
{
  "name": "Nome do Usuário",
  "age": 25,
  "email": "usuario@email.com"
}
```

---

## 📱 Layout responsivo

A listagem de usuários se adapta automaticamente ao tamanho da tela:

| Largura da tela | Colunas |
|----------------|---------|
| Acima de 1000px | 3 colunas |
| Entre 670px e 1000px | 2 colunas |
| Abaixo de 670px | 1 coluna |

---

## 🎨 Design

O projeto usa um tema escuro com as seguintes cores principais:

| Elemento | Cor |
|---------|-----|
| Fundo das páginas | `#181f36` |
| Card de usuário | `#252d48` |
| Textos | `#FFFFFF` |
| Campo obrigatório (`*`) | `#ef4f45` |
| Borda dos inputs | `#d2dae2` |

Cada card de usuário exibe avatar, nome, idade, e-mail e um ícone de lixeira com efeito hover/active para exclusão.

---

## 🖼️ Avatares dinâmicos

Na listagem, cada usuário exibe um avatar gerado automaticamente com base no seu `id`:

```
https://avatarapi.runflare.run/public?usearname={user.id}
```

Nenhuma configuração adicional é necessária.

---

## 🧩 Componentes reutilizáveis

### `<Button />`
Botão com suporte à prop `theme`:
```jsx
<Button theme="primary" onClick={handleClick}>Cadastrar</Button>
<Button onClick={() => navigate("/")}>Voltar</Button>
```

### `<Title />`
Componente de título estilizado para cabeçalhos de páginas.

### `<TopBackground />`
Elemento visual decorativo exibido no topo de todas as páginas.

---

## 📌 Rotas da aplicação

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Home` | Formulário de cadastro de usuários |
| `/lista-de-usuarios` | `ListUsers` | Listagem e exclusão de usuários |

---

## 📦 Scripts disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera o build para produção
npm run preview  # Pré-visualiza o build de produção
npm run lint     # Executa o ESLint
```

---

## 🌐 Deploy

Este projeto pode ser publicado em:

- **[Vercel](https://vercel.com/)** — recomendado para projetos React/Vite
- **[Netlify](https://netlify.com/)**
- **[GitHub Pages](https://pages.github.com/)** (requer configuração extra com Vite)

> Lembre-se de configurar a variável de ambiente com a URL da API em produção.

---

## 👨‍💻 Autor

<div align="center">

**Almiro de Souza**

[![GitHub](https://img.shields.io/badge/GitHub-Almirodesouza-181717?style=for-the-badge&logo=github)](https://github.com/Almirodesouza)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Almiro%20de%20Souza-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/almirodesouza)

</div>

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
