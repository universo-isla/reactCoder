import { React, useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({id, name, precio, quantity}) => {

    const {removeItem} =  useContext(CartContext)

  return (
    <div>
      <p>{name}</p>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${precio} </p>
      <p>Subtotal: <span>${quantity * precio} </span> </p>
      <button onClick={() => removeItem(id)}>Remover producto</button>
    </div>
  );
}

export default ItemCart