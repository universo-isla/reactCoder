import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <nav className="NavBar">
            <Navbar variant="light" sticky="top" expand="sm">
                <Navbar.Brand >
                    <img src={'./multimedia/logo_amantes_verdes.png'} alt="logo_NavBar" height={100} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="Plantas" >Plantas</Nav.Link>
                        <Nav.Link href="Masetas" >Masetas</Nav.Link>
                        <Nav.Link href="Accesorios" >Accesorios</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <NavLink to='/list' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lista</NavLink>
                <NavLink to='/detail' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Detalle</NavLink>


                <div>
                    <CartWidget />
                </div>
            </Navbar>
  {/*           <div>
                
            </div>
            <div>
                <button>Plantas</button>
                <button>Accesorios jardinería</button>
                <button>Fertilizantes</button>
            </div> */}
            
            

        </nav>
    )
}

export default NavBar