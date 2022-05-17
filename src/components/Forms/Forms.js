
import React from 'react';
import './Forms.css'
import { useState, useContext } from "react";
import CartContext from '../../context/CartContext'
import { 
    getDocs, 
    writeBatch, 
    where, 
    query, 
    collection, 
    documentId, 
    addDoc } from "firebase/firestore"
    import { firestoreDb } from "../../service/firebase/index"
    import { Link } from 'react-router-dom'


    const objBuyer ={
        name: "",
        phone: "",
        email: "",
        adress: "",
    }


    const Form = () => {
        const { cart, getTotal, clearCart } = useContext(CartContext)
        //const [ input, setInput ] = useState('')
        const [buyer, setBuyer] = useState(objBuyer);
        const [orderState, setOrderState] = useState(null);
        const [orderId, setOrderId] = useState(null);

        const handleSubmit = (e) => {
            e.preventDefault()
        }


        const getForm = (e) => {
            const { name, value } = e.target;
            setBuyer({ ...buyer, [name]: value });
        };

        const confirmOrder = () => {
            setBuyer(objBuyer);
            clearCart();
            setOrderState("confirmed");
          };

        const createOrder = async () => {
            setOrderState("processing");

            const orderObj = {
                items: cart.map((product) => {
                  return {
                    id: product.id,
                    nombre: product.name,
                    quantity: product.quantity,
                    precio: product.precio,
                  };
                }),
                userBuyer: buyer,
                total: getTotal(),
                date: new Date(),
              };

            const collectionRef = collection(firestoreDb, "orders");
            setOrderId((await addDoc(collectionRef, orderObj)).id);
            confirmOrder(orderId);
            };

            const sinStock = () => {
                const ids = cart.map((p) => p.id);
                const batch = writeBatch(firestoreDb);
                const collectionRef = collection(firestoreDb, "products");
            
                getDocs(query(collectionRef, where(documentId(), "in", ids)))
                    .then((response) => {
                        response.docs.forEach((doc) => {
                        const dataDoc = doc.data();
                        const prodQuantity = cart.find((prod) => prod.id === doc.id)?.quantity; 

                        if (dataDoc.stock >= prodQuantity) {
                            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
                            batch.commit();
                        } else {
                            return Promise.reject( { name: 'errorSinStock', products: sinStock})
                            }
                        });
                    })
                .catch((error) => {
                    console.log(error);
                });
            };

            const stockUorden = () => {
                createOrder();
                sinStock();
              };

            if (orderState === "confirmed") {
            return (
                <>
                <div>
                    <h1>Hola {buyer.name} ¡Gracias por tu compra!</h1>
                    <p>Tu numero de orden es {orderId} .</p>
                    <button>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        Pagina Principal
                    </Link>{" "}
                    </button>
                </div>
                </>
            );
            } else if (orderState === "processing") {
            return (
                <>
                <div>
                    <h1>Orden en proceso</h1>
                </div>
                </>
            );
            }

            return (
                <>
                  <div className="Form">
                    <form className="ContenedorForm" onSubmit={handleSubmit}>
                      <h1>Ingresa los siguientes datos</h1>
                      <label>Nombre:
                        <input required
                          type="text"
                          name="name"
                          value={buyer.name}
                          onChange={getForm}
                          className="input"
                          placeholder="Nombre"
                        /></label>
                      <label>Teléfono:
                        <input required
                          type="number"
                          name="phone"
                          value={buyer.phone}
                          onChange={getForm}
                          className="input"
                          placeholder="Teléfono"
                        /></label>
                      <label>Mail:
                        <input required
                            type="email"
                            name="email"
                            value={buyer.email}
                            onChange={getForm}
                            className="input"
                            placeholder="Mail"
                        />
                      </label>
            
                      <label>Dirección de envío:
                          <input required
                              type="text"
                              name="adress"
                              value={buyer.adress}
                              onChange={getForm}
                              className="input"
                              placeholder="Dirección"
                          />
                      </label>
                      <div>
                        <button className="buttonAgregar" onClick={() => stockUorden()} > Colocar orden </button>
                      </div>
                    </form>
                  </div>
                </>
              );
            };
            
            export default Form

