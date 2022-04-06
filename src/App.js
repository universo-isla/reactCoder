import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContenedor from './components/ItemListContainer/ItemListContenedor';

function App () {

    return (
        <div className="App">
            <NavBar />
            <ItemListContenedor />
        </div>
    );
}

export default App;