import { React, useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({id, name, precio, quantity}) => {

    const {removeItem} =  useContext(CartContext)

  return (
    <div className="ProductsInCart">
      <div className="ProductsInCartInfo">
        <h2>{name}</h2>
        <p>Cantidad: {quantity}</p>
        <p>Precio unitario: ${precio} </p>
        <p>Subtotal: <span>${quantity * precio} </span> </p>
      </div>
      <button className="ProductsInCartButton" onClick={() => 
        removeItem(id)}>Remover producto</button>
    </div>
  );
}

export default ItemCart