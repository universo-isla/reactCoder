import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'

//import { Context } from '../../App';

//import Context from 'react-bootstrap/esm/AccordionContext';


const Item = ({id, name, img, precio}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en Item')
    }

   

    return(
        <article className='CardItem' onClick={handleClick}>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item