import React from 'react';
import ItemCount from '../ItemCount/index';
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';


const ItemDetail = ({id, name, img, category, descripcion, precio, stock}) => {


    const [  setQuantity ] = useState(0) //quantity, va dentro de corchetes, prueba

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        
        setQuantity(count)

        const productObj = {
            id, name, precio
        }

        addItem ({...productObj, count}) // **Aquí hay un problema, si agrego : count algo pasa con quantity que sale "is neves used "**

    }

    return(
        <article className='CardItem'>

            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>

            <header className='Header'>
                <h2 className='ItemHeader'> {name} </h2>
            </header>

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
                {/*<Select options={options} onSelect={handleSelect} />*/}
                { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} onAdd={handleAdd} stock={stock} /> }
            </footer>
        </article>
    )
}
export default ItemDetail