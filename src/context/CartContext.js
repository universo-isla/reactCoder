import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])

    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => { //se recibe el ID para buscar
       return cart.some( prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
       const products = cart.filter(prod => prod.id !== id) //  desde => es equivalente a true
       setCart(products)
    }

    return(
        <CartContext.Provider value={{
             cart,
             addItem,
             getQuantity,
             isInCart,
             clearCart,
             removeItem
        }}>
            { children}
        </CartContext.Provider>
    )

}

export default CartContext