import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting ='Bienvenidos Amantes Verdes' />
        </div>
    );
}

export default App;