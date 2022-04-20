import React from 'react';
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../itemList/itemList';
//import promiseProduct from '../../utils/getPlants';
//import ItemCount from '../ItemCount';
//import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemListContenedor = (props) => {
    
    const [products, setProducts] = useState([])
    //const [loading, setLoading] = useState([true]);

    const { categoryId } = useParams()
    

    useEffect (() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    const handleClick = () => {
        console.log('click')
    }

   return(
        <div onClick={handleClick}>
            { /* <Title>{props.greeting}</Title> */}
            <ItemList products={products} />
        </div>

    ) 
}
export default ItemListContenedor