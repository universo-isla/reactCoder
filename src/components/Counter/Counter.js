import React from 'react';
import { useState } from "react";
import './ItemCount.css'


const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }


    return(
        <div className='Counter'>
            <div className='Contador'>
                <button className='buttonAgregar' onClick={decrement}>-</button>
                <p className='CounterCant'>{count}</p>
                <button className='buttonAgregar' onClick={increment}>+</button>
            </div>
            <div className='Agregar'>
                <button className='buttonAgregar' onClick={() => onAdd(count)}>
                    <img src ='/multimedia/cart_vde.png' alt='cart' className='CartImgCounter'/>Agregar</button>
            </div>
        </div>
    )

}

export default Counter