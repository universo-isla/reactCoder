//import React, { useContext } from 'react';
import React from 'react';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div>
            <div className="CartWidget">
                <Link to="/carrito">
                    <img src ='./multimedia/cart_vde.png' alt='cart' className='CartImg'/>
                    <p className={`{getQuantity() === 0 ? "oculto" : "numero-carrito"}`}>
                        { getQuantity() } {""}
                    </p>
                </Link>
                
            </div>
        </div>
    );
}

export default CartWidget