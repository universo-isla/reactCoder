import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContenedor from './components/ItemListContainer/ItemListContenedor';
//import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/Forms/Forms.js';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Notification from './Notification/Notification';



const App = () => {

    const [cart, setCart] = useState([]); 
    console.log(cart)

    
    return (
        <div className="App">
            
            <CartContextProvider>
                <Notification />
                <BrowserRouter>
                    <NavBar />
                    {/* <Link to='/form' className='Option'> Form </Link> */ } 
                    <Routes>
                        <Route path='/' element={<ItemListContenedor greeting={<p>Catálogo de plantas</p>} />} />
                        <Route path='/category/:categoryId' element={<ItemListContenedor />} />
                        <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart} />} /> 
                        {/* <Route path='*' element={<h1>'No encontrado (Error 404)'</h1> }  /> */ } 
                        <Route path='/form' element={<Form />} />
                        <Route path='/cart' element={<Cart />} />                
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}




export default App;