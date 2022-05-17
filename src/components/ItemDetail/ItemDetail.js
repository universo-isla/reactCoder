import React from 'react';
import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import Counter from '../Counter/Counter'
import { useNotification } from '../../notificaction/notification';
import { Button } from 'react-bootstrap';



const ItemDetail = ({
    id, 
    name, 
    img, 
    category, 
    descripcion, 
    precio, 
    stock
    }) => {

        const { addItem,  getQuantityProd } = useContext(CartContext)
        const { setNotification } = useNotification()

        const handleAdd = (count) => {


            const objProd = 
            {
                id, 
                name, 
                precio, 
                quantity: count,
            }

        addItem (objProd);
        setNotification('success', `Se agregaron ${count} ${name} correctamente`);

    }

    return(
        <div className='CardDetailContainer'>
            <article className='CardItemDetail'>
                <div className='DetailImage'>
                    <picture>
                        <img src={img} alt={name} className='ItemImg' />
                    </picture>
                </div>
                <div className='DetailTitle'>
                    <h2 className='ItemHeader'> {name} </h2>
                </div>
                <div className='DetailInfo'>
                    <p className='Info'>
                        Categoria: {category}
                    </p>
                    <p className='Info'>
                        Descripción: {descripcion}
                    </p>
                    <p className='Info'>
                        Precio: ${precio}
                    </p>
                    <p className='Info'>
                        Stock actual: {stock}
                    </p>
                </div>
                <div className='ItemFooter'> 
                    { 
                    false ? 
                    <Link className='button' to='/cart'><Button className='button'>Ir al carrito</Button></Link> 
                    : 
                        <Counter 
                        onAdd={handleAdd} 
                        stock={stock} 
                        initial={getQuantityProd(id)} 
                        />
                    } 
                </div>
            </article>
        </div>
    )
}
export default ItemDetail