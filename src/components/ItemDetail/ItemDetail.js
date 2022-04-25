import React from 'react';
//import ItemCount from '../ItemCount/index';
import './ItemDetail.css'
import { /* useState, */ useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter';
import CartContext from '../../context/CartContext';


const ItemDetail = ({id, name, img, category, descripcion, precio, stock, setCart, cart}) => {


    //const [quantity, setQuantity ] = useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        //setQuantity(count)

        const objProd = {
            id, name, precio
        }

        setCart([...cart, objProd])
        //setQuantity(count)

        addItem ({...objProd, quantity: count})

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
                { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <Counter initial={1} onAdd={handleAdd} stock={stock} /> } 
            </footer>
        </article>
    )
}
export default ItemDetail