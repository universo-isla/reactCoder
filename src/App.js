import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting ='Bienvenidos Amantes Verdes' />
        </div>
    );
}

export default App;