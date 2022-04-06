import React from 'react';

const Item = (name, img) => {
    return(
        <section>
            <picture>
                <img src={img} alt = {name} />
            </picture>
            <h3>{name}</h3>
        </section>
    )
}

export default Item