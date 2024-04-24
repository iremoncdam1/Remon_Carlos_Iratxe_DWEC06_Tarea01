import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './titulo.jsx'
import Boton from './botones.jsx' 
import './index.css' 

//En el elemento con "id = root" del html añadimos nuestros elementos
ReactDOM.createRoot(document.getElementById('root')).render(
  <section className="section">
    <Titulo />
    <Boton />
  </section>
)