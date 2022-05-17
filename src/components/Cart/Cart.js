import { React, useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {


    const { cart, getTotal, clearCart, getQuantity } = useContext(CartContext)

    if(getQuantity() === 0) {
        return(
            <>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'>
                    <button className="buttonAgregar">Ir al listado</button>
                </Link> 
            </>
        )
    }

    return (
        <div className="ContenedorCart">
            <h1>Tu carrito</h1>
            <div className="ContenedorCartProds">
                {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}
            </div>
            
                <p className="Total">Total: ${getTotal()}</p>
                <div>
                    <Link to={'/'} onClick={() => clearCart()}>
                        <button className= "ProductsInCartButton">Vaciar carrito</button>
                    </Link>
                    <Link  to={'/form'}>
                        <button className= "ProductsInCartButton">Orden de compra</button>
                    </Link>
                </div>
        </ div>
        
    )
}

export default Cart;
