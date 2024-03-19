import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './titulo.jsx' 
import Slider from './slider.jsx' 
import Boton from './botones.jsx' 
import './index.css' 

//En el elemento con "id = root" del html añadimos nuestros elementos
ReactDOM.createRoot(document.getElementById('root')).render(
  <section className="section">
    <Titulo />
    
    <div className="btn-container">
        <Boton id="todo" texto="Todas las categorias"/>
        <Boton id="cat1" texto="Naturaleza"/>
        <Boton id="cat2" texto="Mar"/>
        <Boton id="cat3" texto="Parapente"/>
    </div>

    <div className="section-center">
        <Slider />
    </div>
  </section>
)