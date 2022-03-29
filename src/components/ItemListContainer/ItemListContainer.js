const ItemListContainer = (props) => { /*lo que se recibe por prop es un parámetro, aunque se pasa como argumento  */

    return(
        <h1>{props.greeting}</h1>
    )
}

export default ItemListContainer;