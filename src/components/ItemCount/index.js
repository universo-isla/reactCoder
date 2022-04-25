import React from "react";
import { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({onAdd, stock, initial /*count*/}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > initial){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    return (
        <>
        <div className="Contador">
            <button className="btn_contador" onClick= {decrement}>-</button>
            <p> {count} </p> 
            <button className="btn_contador" onClick= {increment}>-</button>
        </div>
        <button className="btn_aCarrito" onClick={()=> onAdd(count)}>Agregar a carrito</button>
        
        </>

    );  
};

export default ItemCount;