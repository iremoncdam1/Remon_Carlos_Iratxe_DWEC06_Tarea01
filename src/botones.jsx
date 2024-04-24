import data from './data.js'; 
import { useState, useEffect } from "react";

function Boton() {
    const [categorias, setCategoria] = useState([]);
    useEffect(() => {
        let categoriasArray = [];
        data.forEach(slider => {
            
          if (!categoriasArray.includes(slider.categoria)) {
            categoriasArray.push(slider.categoria);
          }
        });
        setCategoria(categoriasArray);
      }, []);

    const handleClick = categoria => {
        console.log('Categoría seleccionada:', categoria);
    };
    

  return (
    <div className="btn-container">
        <button type="button" className="filter-btn" key="Todo" onClick={() =>handleClick("Todo")}>Todo</button>
            {
                categorias.map(categoria => (
                    <button type="button" className="filter-btn" key={categoria} onClick={() => handleClick(categoria)}>{categoria}</button>
                ))
            }
    </div>
  );
}

export default Boton