
const products = [
    { id: 1, name: 'helecho 1', precio: '140', img: 'https://www.elmueble.com/medio/2019/02/01/helecho_93b2473b.jpg', stock: 34, descripcion: 'descripcion1'},
    { id: 2, name: 'Helecho Cuerno de Alce', precio: '140', img: './multimedia/cuerno_alce_col2_v4.png', stock: 34, descripcion: 'descripcion1' },
    { id: 3, name: 'Uña de Señorita', precio: '140', img: './multimedia/una_srita.png', stock: 15, descripcion: 'descripcion2' },
    { id: 4, name: 'Peperomia', precio: '140', img: './multimedia/peperomia.png', stock: 8, descripcion: 'descripcion3' },
    { id: 5, name: 'Helecho Fuarei', precio: '140', img: './multimedia/helecho_fua.png', stock: 4, descripcion: 'descripcion4' },
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
    }, 2000)
    })
}

export default products;
