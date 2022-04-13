import React from 'react';
import './Item.css';
//import {link} from 'react-router-dom'

/* const Item = ({name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt = {name} />
            </picture>
            <h3>{name}</h3>
            <button>Ver detalle</button>
        </section>
    )
} */

const Item = ({id, name, img, precio}) => {

    return(
    <article className='CardItem'>
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
            <link to={`/detail/${id}`} className='Option'>Ver detalle</link>
        </footer>
    </article>
    )
}



export default Item