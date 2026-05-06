from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from lerDados import (
    limpar_dados,
    histogram,
    imshow,
    scatter
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analisar")
async def analisar(file: UploadFile):
    tabela = pd.read_csv(file.file)

    tabela = limpar_dados(tabela)

    return{
        "histogram": histogram(tabela),
        "imshow": imshow(tabela),
        "scatter": scatter(tabela)
    }