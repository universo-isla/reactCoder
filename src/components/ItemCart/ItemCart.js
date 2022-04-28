import { React, useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({id, name, precio, quantity}) => {

    const {removeItem} =  useContext(CartContext)

  return (
    <div>
      <p>{name}</p>
      <p>$ {precio}</p>
      <p>SubTotal: $ {quantity * precio} </p>
      <p>Cantidad: {quantity}</p>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  );
}

export default ItemCart