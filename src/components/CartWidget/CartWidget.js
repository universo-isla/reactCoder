//import React, { useContext } from 'react';
import React from 'react';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div className='CartWidget'>
            <div className={getQuantity() === 0 ? 'oculto' : 'tieneProds}'}>
           
                <Link to="/cart">
                    <button className='buttonWidget'>
                        <p className='ProdsCartWidget'>No. de productos: { getQuantity() } {""}</p>
                        <img src ='/multimedia/cart_vde.png' alt='cart' className='CartImg'/>
                        Ir al carrito
                    </button>

                </Link>
                
            </div>
        </div>
    );
}

export default CartWidget