import React from "react";
import { useState } from 'react'
import '../ItemCount/ItemCount.css'


function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  
    const incrementar = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
      }
    }
  
    const disminuir = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }

    if(stock === 0) {
      return <button className='Option' disabled>No hay stock</button>
  }

    return (
      <div>
        <button onClick={disminuir}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementar}>+</button>
        <button onClick={() => onAdd(quantity)}> Agregar al carrito </button>
      </div>
    );
  }
  export default ItemCount;
