import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContenedor from './components/ItemListContainer/ItemListContenedor';
//import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-dom'

function App ()  {


    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContenedor />} />
                    <Route path='/category/:categoryId' element={<ItemListContenedor />} />
                    <Route path='/detail/:productId' element={<ItemDetailContainer />}  />
                    <Route path='*' element={<h1>'No encontrado (Error 404)'</h1> }  />
                </Routes>

            </BrowserRouter>
            
            {/* <ItemCount />
            <ItemListContenedor /> */}
        </div>
    );
}




export default App;