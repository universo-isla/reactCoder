import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../service/firebase';
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'


const ItemDetailContainer = (setCart, cart) => {
    const [product, setProduct] = useState([])
    const [loading, ] = useState(false)

    const { productId } = useParams()

    useEffect (() => {

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })

    

        return (() => {
            setProduct()
        })
    }, [productId])


    return (
        <div className="ItemDetailContainer">
            {
                loading ?             
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  {...product} setCart={setCart} cart={cart } />
                 : 
                    <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer
