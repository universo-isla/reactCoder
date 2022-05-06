import React from 'react';
import Item from '../Item/item';
import { memo } from 'react';
import './ItemList.css'


const ItemList = ({products}) => {


    return(
        <div className='ListGroup'onClick={() => console.log ('click en ItemList')}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
      )
}
export default memo (ItemList, (oldProps, newProp) => {})