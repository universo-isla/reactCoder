//import React, { useContext } from 'react';
import React from 'react';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <>
            <div className="CartWidget">
                <img src ='./multimedia/cart_vde.png' alt='cart' className='CartImg'/>
                <div> { getQuantity() } </div>
            </div>
        </>
    );
}

export default CartWidget