import products from '../asyncmock.js';


const promiseProduct = new Promise((resolve, reject) => {
    const ok = true;
    setTimeout(() => {
        if(ok) {
            resolve(products);
        }else {
            reject('error');
        }
    },4000);
})

export default promiseProduct;