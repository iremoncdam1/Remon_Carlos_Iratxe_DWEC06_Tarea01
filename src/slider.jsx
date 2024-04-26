import data from './data.js'; 
import { useState, useEffect } from "react"; 

//Creamos el componente Slider
function Slider({categoriaSelect}) {

    //Se hace una variable contador (counter) y se inicializa a 1.
    const [counter, setCounter] = useState(1);

    //El timer que hará que cada dos segundos vaya aumentando el contador y de esta manera, cambiando de foto.
    useEffect(() => {
        const timer = setTimeout(() => {
            let cont = counter >= data.length ? 1 : (counter + 1);
            setCounter(cont);
        }, 2000);
        
    });

    return (
        <div className="section-center">
            {data.map(({id, img, categoria, src }, index) => {
                //className={ ((id==index) ? 'activeSlide' : (id > index) ? "nextSlide" : 'lastSlide')}
                if (categoria === categoriaSelect || categoriaSelect === "Todo") {
                    return (
                        <article key={id} className={ ((id==counter) ? 'activeSlide' : (id > counter) ? "nextSlide" : 'lastSlide')}>
                            <img src={src} alt={img} className="person-img" />
                            <h4>{img}</h4>
                            <p className="title">{categoria}</p>
                        </article>
                    );
                } 
            })}
        </div>
    );
  }
  
  export default Slider