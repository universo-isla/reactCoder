import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContenedor from './components/ItemListContainer/ItemListContenedor';
//import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Form from './components/Forms/Forms.js';
import { CartContextProvider } from './context/CartContext';
//import Cart from '' ** falta esto** 

//export const Context = createContext()

const App = () => {
    //const [cart, setCart] = useState([])

    //console.log(cart)
    
    return (
        <div className="App">
            {/*<Context.Provider value={{ cart, setCart}}>*/}
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                     <Link to='/form' className='Option'> Form </Link>
                    <Routes>
                        {/* <Route path='*' element={<h1>'No encontrado (Error 404)'</h1> }  /> */ } 
                        <Route path='/' element={<ItemListContenedor />} />
                        <Route path='/category/:categoryId' element={<ItemListContenedor />} />
                        <Route path='/detail/:productId' element={<ItemDetailContainer /* **esto falta** setCart={setCart} cart={cart} */ />}  /> 
                         <Route path='/form' element={<Form />} />                 
                    </Routes>

                </BrowserRouter>
                </CartContextProvider>
            {/* </Context.Provider> */}
        </div>
    );
}




export default App;