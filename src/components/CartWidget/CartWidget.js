//import React, { useContext } from 'react';
import React from 'react';
import './CartWidget.css'

const CartWidget = () => {
    //const {getQuantity} = useContext(CartContext)

    return (
        <div className="CartWidget">
            <img src ='./multimedia/cart_vde.png' alt='cart' className='CartImg'/>
            {/* getQuantity() */}
        </div>
    );
}

export default CartWidget