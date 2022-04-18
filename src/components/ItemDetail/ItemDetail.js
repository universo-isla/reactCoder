import React from 'react';
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { /*useNavigate*/ Link} from 'react-router-dom'
import Counter from '../Counter/Counter';
//import CartWidget from '../CartWidget/CartWidget';
import CartContext from '../../context/CartContext';


const ItemDetail = ({id, name, img, category, description, precio, stock}) => {

    //const [typeInput, setTypeInput] = useState(true)
    //const [quantity, setQuantity] = useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    //const { cart, setCart } = useContext(Context)

    const handleAdd = (count) => {

        const productObj = {
            id, name, precio
        }

        addItem ({...productObj, quantity: count})

    }
    //const options = [{id: 0, value:'', text:'-'}, {id: 1, value:'/', text: 'ItemListContenedor'}, {id: 2, }]
/*     const navigate = useNavigate()

    const value = useContext(Context)

    const handleAdd = (count) => {
        console.log(value)

        setQuantity(count)
        console.log(quantity)

        const objProd = {  
            id, name, precio, quantity
        }

        
        setCart([...cart, objProd])
        
    }

    const handleSelect = (value) => {
        navigate(value)
    }

    const Count = typeInput ? ButtonCount : InputCount */

    return(
        <article className='CardItem'>
            <header className='Header'>
                
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                {/*<Select options={options} onSelect={handleSelect} />*/}
                { isInCart(id) > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Counter onAdd={handleAdd} stock={stock} /> }
            </footer>
        </article>
    )
}
export default ItemDetail