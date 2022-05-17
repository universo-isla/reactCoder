import React from 'react';
import '../ItemListContainer/ItemListContenedor.css'
import { useState, useEffect } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../service/firebase';

const ItemListContenedor = () => {
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    

    useEffect (() => {

        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))//where tiene 3 parámetros: nombre del campo, como de va a cpmàra y con qué
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {console.log(response)
                const products = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data() }
                })
                setProducts(products)
            })
    }, [categoryId])

    if(products.length === 0) {
        return <h1>No hay productos en esta categoría</h1>
    }

   return(
        <div className='ItemListContenedor'>
            <ItemList products={products} />
        </div>

    ) 
}
export default ItemListContenedor