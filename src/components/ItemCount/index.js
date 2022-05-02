import React from "react";
import { useState } from 'react'
import '../ItemCount/ItemCount.css'

<<<<<<< HEAD
=======
const ItemCount = ({onAdd, stock, initial, /*count*/}) => {
    const [count, setCount] = useState(initial)
>>>>>>> parent of 9ece763... mejoras en contador, ya va a los detalles, aunque se desconectan las imgs, ya suma a la cant del carrito

function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);
  
    function incrementar() {
      if (count < stock) {
        setCount(count + 1);
      }
    }
  
    function decrementar() {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    return (
<<<<<<< HEAD
      <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
        <button onClick={() => onAdd(count)}> Agregar al carrito </button>
      </div>
    );
  }
  export default ItemCount;
=======
        <>
        <div className="Contador">
            <button className="btn_contador" onClick= {decrement}>-</button>
            {count}
            <button className="btn_contador" onClick= {increment}>-</button>
        </div>
        <button className="btn_aCarrito" onClick={()=> onAdd(count)}>Agregar a carrito</button>
        
        </>

    );  
};

export default ItemCount;
>>>>>>> parent of 9ece763... mejoras en contador, ya va a los detalles, aunque se desconectan las imgs, ya suma a la cant del carrito
