import React from 'react';
//import ItemCount from '../ItemCount/index';
import './ItemDetail.css'
import { /* useState, */ useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import Counter from '../Counter/Counter'
import { useNotification } from '../../notificaction/notification';
//import NotificationContext from '../../notificaction/notification';


const ItemDetail = ({id, name, img, category, descripcion, precio, stock}) => {

    const { addItem,  /* isInCart, */  getQuantityProd } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        
        //setQuantity(count)

        const objProd = {
            id, name, precio, quantity: count,
        }

        /* setCart([...cart, objProd]) */
        //setQuantity(count)

        addItem (objProd)
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)

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
                : <Counter onAdd={handleAdd} stock={stock} initial={getQuantityProd(id)} /> 
                } 
            </footer>
        </article>
    )
}
export default ItemDetail