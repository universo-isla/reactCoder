import { React, useContext, /* useState */ } from "react"
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'

const Cart = () => {

    //const [loading, setLoading] = useState(false)

    const { cart, totalCost, clearCart, getQuantity } = useContext(CartContext)
    
    //const ids = cart.map(prod => prod.id)

    if(getQuantity() === 0) {
        return (
            <div>
                <h1>No hay productos</h1>
                <Link to={"/productos"}>Inicio</Link>
            </div>
        )
    } 

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((prod) => (
            <ItemCart key={prod.id} {...prod} />
            ))}
            <span>El total es: $ {totalCost}</span>
            <button onClick={() => clearCart()} className="Button">Vaciar Carrito</button>
            {/* <button onClick={() => createOrder()} className="Button">Terminar pedido</button> */}
            {/* <button>Realizar compra</button> */}
        </ div>
    )
}

export default Cart;
