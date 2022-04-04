import productos from '../asyncmock.js';


const getProductos = () => {
    return new Promise(
        (resolve, reject) => {

        })
}

const promiseProduct = new Promise((resolve, reject) => {
    const ok = true;
    setTimeout(() => {
        if(ok) {
            resolve(productos);
        }else {
            reject('error');
        }
    },4000);
})