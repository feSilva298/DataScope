import { useState } from 'react'
import { Botao } from './components/botao'
import { Histogram } from './components/Histogram'
import { Scatter } from './components/Scatter'
import { Logapi } from './components/Logapi'
import { Imshow } from './components/Imshow'
import './index.css'

function App() {

  const [resultado, setResultado] = useState(null)
  const [mostrar, setMostrar] = useState(false)

  return (
    <>
    <div className='min-h-screen bg-neutral-200'>
      <div className='h-200 flex flex-col gap-4 items-center justify-center'>
        <p className='text-4xl'>Enviar CSV</p>
        <Botao setResultado={setResultado} resultado={resultado} setMostrar={setMostrar}/>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center'>
          <Histogram resultado={resultado}/>
          <Scatter resultado={resultado}/>
          <Imshow resultado={resultado}/>
          <Logapi mostrar={mostrar} resultado={resultado}/>
      </div>
    </div>
    </>
  )
}

export default App
