import React from 'react';
import './Item.css';

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

const Item = ({name, img, precio}) => {

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
            <button>Ver detalle</button>
        </footer>
    </article>
    )
}



export default Item