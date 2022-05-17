import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContenedor from './components/ItemListContainer/ItemListContenedor';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/Forms/Forms.js';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'

import { NotificationProvider } from './notificaction/notification';
import Footer from './components/Footer/Footer';


const App = () => {
    
    return (
        <div className="App">

            <CartContextProvider>
                <NotificationProvider>
                    <BrowserRouter>
                        <NavBar />
                            <Routes>
                                <Route path='/' element={<ItemListContenedor greeting=
                                    {<p>Catálogo de plantas</p>} />} 
                                />
                                <Route path="/category/:categoryId" 
                                    element={<ItemListContenedor />} 
                                />
                                <Route path='/detail/:productId' 
                                    element={< ItemDetailContainer />}  /> 
                                <Route path='/form' element={<Form />} />    
                                <Route path='/cart' element={<Cart />} />              
                            </Routes>
                        <Footer/>
                    </BrowserRouter>
                </NotificationProvider>
            </CartContextProvider>
        </div>
    );
}

export default App;