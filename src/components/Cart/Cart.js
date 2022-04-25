import { React, useContext } from "react"
import CartContext from '../../context/CartContext'
//import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <>
                <h1>No hay productos</h1>
                <Link to={`/`}>Inicio</Link>
            </>
        )
    } 

    return (
        <>
            <h1>Cart</h1>
            {/* <ItemCart/> */}
        </>
    )
}

export default Cart