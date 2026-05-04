import { useState } from 'react'

import './index.css'

function App() {
 const [File, setFile] = useState(null)
 const [Resultado, setResultado] = useState(null)

async function enviar() {
  if (!File) return

  const formData = new FormData()
  formData.append("file", File)

  const res = await fetch("http://127.0.0.1:8000/analisar", {method: "POST", body: formData})

  const data = await res.json()
  setResultado(data)
}

  return (
    <>
    <body className='bg-neutral-900'>
    <div className='flex justify-center'>
      <span className='text-red-600 text-4xl'>Enviar CSV</span>
      <input className='bg-red-600' type='file' onChange={(e) => setFile(e.target.files[0])}/>
      <button className='bg-blue-500 border-r' onClick={enviar}>
        Enviar
      </button>
      {Resultado && (
        <pre>{JSON.stringify(Resultado, null, 2)}</pre>
      )}        
    </div>
    </body>
    </>
  )
}

export default App
