import React, {useState, useEffect} from 'react';
import { getProducts } from '../../asyncmock';
//import {useState, } from 'react'
//import { getProduct } from '../../asyncmock'
//import { fakeFetch } from '../../asyncmock';
//import ItemCount from '../ItemCount';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
      /*   if(condition === '-'){
            setCount (count -1);
        } if (condition === '+'){
            setCount (count +1);
        } */
    }, [categoryId])



    const stock = 6;
    const initial = 1;

    return (
        <div>
            <h1>{props.greetings}</h1>
            <ItemList products={products} />
        </div>
/*         {/* <div>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
        </div> }*/ 

    )
}



export default ItemListContainer;
