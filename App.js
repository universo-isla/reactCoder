import logo from './logo.svg';
import './App.css';
import NavBar from './src/components/NavBar/NavBar';

const App = () => {

    const estilo = {
        color: 'green',
        fontSize:'35px'
    }

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <img src={logo} className ="App-logo" alt="logo" />
                <h1 style={estilo} className="Titulo">Comisión 31145</h1>
                <button>Boton</button>
            </header>

        </div>
    );
}

export default App;