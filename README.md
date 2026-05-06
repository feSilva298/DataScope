# DataScope

DataScope é uma aplicação web para análise rápida de arquivos CSV, capaz de gerar automaticamente insights e visualizações a partir dos dados enviados pelo usuário.

## 🚀 Funcionalidades

* Upload de arquivos `.csv`
* Limpeza automática dos dados
* Remoção de colunas irrelevantes (ex: IDs)
* Geração de:

  * Matriz de correlação
  * Histogramas das colunas mais relevantes
  * Gráficos de dispersão com alta correlação
* Exibição dos dados processados no frontend

## 🧠 Como funciona

### 1. Upload do arquivo

O usuário seleciona um arquivo `.csv` pela interface.

### 2. Envio para a API

O arquivo é enviado para o backend utilizando `FormData` via requisição `POST`.

### 3. Processamento dos dados

No backend (Python):

* Os dados são carregados com `pandas`
* Linhas vazias são removidas
* Colunas irrelevantes são descartadas
* Apenas dados numéricos são analisados

### 4. Análise

São geradas:

* Correlações entre variáveis
* Variância para identificar colunas relevantes
* Relações fortes entre dados (scatter)

### 5. Retorno

A API retorna os dados processados em formato JSON.

### 6. Exibição

O frontend (React) recebe os dados e os exibe na interface.

## 🛠️ Tecnologias utilizadas

### Frontend

* React
* Vite
* TailwindCSS

### Backend

* Python
* FastAPI
* Pandas

## 📦 Como rodar o projeto

### Backend

```bash
cd backend
uvicorn api:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📌 Observações

* O projeto ainda está em desenvolvimento
* Melhorias visuais e novos gráficos podem ser adicionados
* Estrutura pensada para ser escalável

## 📄 Licença

Este projeto está sob a licença MIT.
