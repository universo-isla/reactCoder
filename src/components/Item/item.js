import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'



const Item = ({id, name, img, precio}) => {

    return(
        <article className='CardItem'>
           <div className={id}>
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
                <section className='ItemFooter'>
                    <Link to={`/detail/${id}`} className='Option'>
                        <button className='button'>Detalle</button>
                    </Link>
                </section>
           </div>

        </article>
    )
}

export default Item