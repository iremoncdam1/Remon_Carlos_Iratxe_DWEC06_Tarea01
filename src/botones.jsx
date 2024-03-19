import { useState } from "react";

function Boton({id, texto}) {
    const [categoria, setCategoria] = useState("todo")

    function handleClick() {
        alert(texto);
    }

    return (   
        <button type="button" className="filter-btn" data-id={id} onClick={handleClick}>{texto}</button>
    )
}

export default Boton