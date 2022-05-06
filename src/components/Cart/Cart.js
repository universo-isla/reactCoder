import { React, useContext, /* useState */ } from "react"
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'

const Cart = () => {

    //const [loading, setLoading] = useState(false)

    const { cart, removeItem, getTotal, clearCart, getQuantity } = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'>
                    <button>Ir al listado</button>
                </Link> 
            </>
        )
    }



    return (
        <div>
            <h1>Tu carrito</h1>
            {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}
                <p className="Total">Total: ${getTotal()}</p>
                <div className="Btn">
                    <Link className="vaciar" to={'/'} onClick={() => clearCart()}>Vaciar carrito</Link>
                    <Link className="continuar" to={'/form'}>Continuar compra</Link>
                </div>
        </ div>
        
    )
}

export default Cart;
