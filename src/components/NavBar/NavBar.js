import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return(
        <nav className="NavBar">
            <div>
                <h1>Amantes Verdes</h1>
                <img src={'./multimedia/logo_amantes_verdes.png'} alt="logo_NavBar" />
            </div>
            <div>
                <button>Plantas</button>
                <button>Accesorios jardinería</button>
                <button>Fertilizantes</button>
            </div>
            <div>
                <CartWidget />
            </div>
            

        </nav>
    )
}

export default NavBar