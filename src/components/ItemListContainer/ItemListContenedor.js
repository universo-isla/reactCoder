import React from 'react';
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../itemList/itemList';

const ItemListContenedor = (props) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, []) 

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products} />
        </div>

    )
} 
export default ItemListContenedor;

