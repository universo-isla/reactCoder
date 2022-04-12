import React from 'react';
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../itemList/itemList';
//import promiseProduct from '../../utils/getPlants';
//import ItemCount from '../ItemCount';

const ItemListContenedor = (props) => {
    //const [count, setCount] = useState([1]);
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

/*     useEffect(() => {
        console.log(products);
    }, [products]) */

    return(
        <div>
            {/*  {products.map((prods) => (
                <div>
                    
                    {/* <ItemList products={products} /> */}
                    {/* <img src={prods.image} alt = "imagen"  /> */}
                    {/*<ItemCount />}
                </div>
                    
            ))} */}

            <h1>{props.greetings}</h1> 
            <ItemList products={products} />
            
            
        </div>

    )
} 
export default ItemListContenedor;

