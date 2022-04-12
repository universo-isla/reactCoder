import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, precio, stock }) => {

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
    
            </footer>
        </article>
    )
}
export default ItemDetail