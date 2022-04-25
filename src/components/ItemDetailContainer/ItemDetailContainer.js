import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'



const ItemDetailContainer = ({setCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect (() => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
        setLoading(false)
    })

        return(() => {
            setProduct()
        })
    }, [productId])

    if(loading) {
        return(
            <h1>Cargando...</h1>
        )
    }

    return (
        <div className='ItemDetailContainer'>
         {
            product ?
                <ItemDetail  {...product} setCart={setCart} cart={cart } /> :
                <h1>El producto no existe</h1>
            } 
        </div>
    )
}

export default ItemDetailContainer
