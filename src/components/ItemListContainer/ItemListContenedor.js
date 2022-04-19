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
        }).catch(err => {
            console.log(err)
        })/* .finally(() => {
            setLoading(false)
    }) */
    }, [categoryId])

/*     useEffect(() => {
        console.log(products);
    }, [products]) */

   return(
        <div>
            <ItemList products={products} />
        </div>

    ) 
}
export default ItemListContenedor