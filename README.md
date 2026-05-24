````md
# DataScope

DataScope é uma plataforma web de análise de dados que transforma arquivos CSV em visualizações e insights automaticamente.

A aplicação permite que usuários façam upload de datasets e obtenham análises estatísticas, correlações e gráficos de forma rápida e intuitiva.

## 🌐 Projeto Online

[🔗](https://data-scope-mu.vercel.app/)

---

# 🚀 Funcionalidades

- Upload de arquivos CSV
- Processamento automático de dados
- Limpeza e preparação do dataset
- Remoção de colunas irrelevantes
- Análise de correlação entre variáveis
- Geração de histogramas
- Geração de gráficos de dispersão
- Visualização dinâmica dos dados processados
- Integração entre frontend e backend

---

# 🧠 Fluxo da Aplicação

## Upload do arquivo
O usuário envia um arquivo `.csv` pela interface web.

## Processamento
O backend recebe o arquivo e realiza:

- leitura dos dados com Pandas
- remoção de valores inválidos
- seleção de colunas relevantes
- filtragem de dados numéricos

## Análise
A aplicação calcula:

- correlações
- variância
- relações entre colunas
- dados para visualizações

## Retorno
Os dados processados são enviados em formato JSON para o frontend.

## Exibição
O frontend renderiza tabelas, métricas e gráficos dinamicamente.

---

# 🛠️ Tecnologias Utilizadas

## Frontend
- React
- Vite
- TailwindCSS

## Backend
- Python
- FastAPI
- Pandas
- Uvicorn

## Deploy
- Vercel (Frontend)
- Render (Backend)

---

# 📦 Como Rodar o Projeto Localmente

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn api:app --reload
```
---

# 📌 Objetivo do Projeto

O objetivo do DataScope é simplificar análises exploratórias de dados, permitindo que qualquer usuário visualize padrões e relações em datasets CSV sem precisar escrever código.

---

# ⚠️ Observações

- O projeto ainda está em desenvolvimento
- Novas visualizações e análises serão adicionadas futuramente
- O backend pode entrar em modo de espera em períodos de inatividade (Render free tier)

---

# 📄 Licença

Este projeto está sob a licença MIT.
````
