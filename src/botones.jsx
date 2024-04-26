import data from './data.js'; 
import { useState, useEffect } from "react"; 
import Slider from './slider.jsx' 

function Boton() {
  //Array para guardar las categorias existentes
  const [categorias, setCategoria] = useState([]);
  //Ctaegoria seleccionada
  const [categoriaSelect, selectCategoria] = useState();

  //Se recorren los datos y se guardan las categorias (si una ya está en el arrayn no se volverá a guardar)
  useEffect(() => {
    let categoriasArray = [];
    data.forEach(slider => {

      if (!categoriasArray.includes(slider.categoria)) {
        categoriasArray.push(slider.categoria);
      }
    });
    setCategoria(categoriasArray);
  }, []);

  //Al pulsar alguno de los botones de categoria se ejecuta este método que guarda la categoria como seleccionada
  const handleClick = categoria => {
  //console.log('Categoría seleccionada:', categoria);
    selectCategoria(categoria);
  };


  return (
    <>
    {/* Muestra todos los botones de categoría y el componente slider */}
      <div className="btn-container">
        <button type="button" className="filter-btn" key="Todo" onClick={() =>handleClick("Todo")}>Todo</button>
        {
          categorias.map(categoria => (
            <button type="button" className="filter-btn" key={categoria} onClick={() => handleClick(categoria)}>{categoria}</button>
          ))
        }
      </div>
      <Slider categoriaSelect={categoriaSelect||"Todo"}/>
    </>
  );
}

export default Boton