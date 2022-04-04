import React, {useState} from 'react';
//import {useState, useEffect} from 'react'
//import { getProduct } from '../../asyncmock'
//import { fakeFetch } from '../../asyncmock';
import ItemCount from '../ItemCount';



const ItemListContainer = (condition) => {
    const [count, setCount] = useState(1);

    const onAdd = (condition) => {
        if(condition === '-'){
            setCount (count -1);
        } if (condition === '+'){
            setCount (count +1);
        }
    };

    const stock = 6;
    const initial = 1;

    return (
        <div>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
        </div>

    );
};
/* 
const ItemListContainer = (props) => { lo que se recibe por prop es un parámetro, aunque se pasa como argumento  
    const [products, setProducts] = useState ([])

    useEffect (() => {
        fakeFetch().then(prods => {
            setProducts(prods)
        })
    }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ul>
                { products.map(product => <li key= {product.id} >{product.name}</li>) }
            </ul>
        </div>

    )
} 
*/

export default ItemListContainer;