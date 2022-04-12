import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContenedor from './components/ItemListContainer/ItemListContenedor';
import ItemCount from './components/ItemCount';

function App () {

/*     const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
    } */

    return (
        <div className="App">
            <NavBar />
            <ItemCount />
            <ItemListContenedor />
        </div>
    );
}




export default App;