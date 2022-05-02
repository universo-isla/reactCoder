import React from 'react';
import ItemCount from '../ItemCount/index';
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';

 
/* const InputCount = ({onConfirm, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.taget.value <= stock) {
            setCount(e.target.value)
        }
        
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button> 
        </div>

    )

} */

const ItemDetail = ({id, name, img, category, descripcion, precio, stock}) => {


    const [  setQuantity ] = useState(0) //quantity, va dentro de corchetes, prueba

    const { addItem, /* isInCart, */ getQuantityProd } = useContext(CartContext)

    const handleAdd = (count) => {
        
        setQuantity(count)

        const objProd = {
            id, name, precio, quantity: count,
        }

        setCart([...cart, objProd])
        //setQuantity(count)

        addItem (objProd)

    }

    return(
        <article className='CardItem'>

            <header className='Header'>
                <h2 className='ItemHeader'> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>

            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripción: {descripcion}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'> 
                { 
                false ?
                <Link to='/cart'>Ir al carrito</Link> 
                : <Counter initial={getQuantityProd(id)} onAdd={handleAdd} stock={stock} /> } 
            </footer>
        </article>
    )
}
export default ItemDetail