import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './src/components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
const App = () => {

    //const [ show, setShow] = useState({path : 'list', param: '1'})

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <div>
                    <link to='list'>Lista</link>
                    <link to='detail'>Detalle</link>
                </div>
                <Routes>
                    <Route path='/' element = { <h1>Home</h1> } />
                    <Route path='/list' element = {<ItemDetailContenedor /> } />
                    <Route path='/detail' element = {<ItemDetailContenedor /> } />
                    <Route path='*' element = { <h1>No se encontró *404*</h1> } />
                </Routes>
            </BrowserRouter>
             
            {/*            
            <div>
                <button onClick={() => setShow ('list')}>Lista</button>
                <button onClick={() => setShow ('detail')}>Detalle</button>
            </div>
            {show === 'list' ? <ItemListContenedor/> : null}
            {show === 'detail' ? <ItemDetailContainer/> : null} */}
        </div>
    );
}

export default App;