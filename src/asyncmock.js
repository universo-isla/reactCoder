
const products = [
    { id: '1', name: 'Helecho azul', precio: '140', category: 'helechos', img: './multimedia/helechoAzul.png', stock: 34, descripcion: 'descripcion1'},
    { id: '2', name: 'Helecho Cuerno de Alce', precio: '140', category: 'helechos', img: './multimedia/cuerno_alce_col2_v4.png', stock: 34, descripcion: 'descripcion1' },
    { id: '3', name: 'Uña de Señorita', precio: '140', category: 'suculentas', img: './multimedia/una_srita.png', stock: 15, descripcion: 'descripcion2' },
    { id: '4', name: 'Peperomia', precio: '140', category: 'pequenasInt', img: './multimedia/peperomia.png', stock: 8, descripcion: 'descripcion3' },
    { id: '5', name: 'Helecho Fuarei', precio: '140', category: 'helechos', img: './multimedia/una_srita.png', stock: 4, descripcion: 'descripcion4' },
]

const categories =[
    {id: 'helechos', descripcion: 'Helechos'},
    {id: 'suculentas', descripcion: 'Suculentas'},
    {id: 'pequenasInt', descripcion: 'Plantas de Interior'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
    }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
    }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
    }, 500)
    })
}

export default products; //posiblemente comentar?
