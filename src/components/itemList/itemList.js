import React from 'react';
import Item from '../Item/item';
import './ItemList.css'

const ItemList = ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
      )
}
export default ItemList