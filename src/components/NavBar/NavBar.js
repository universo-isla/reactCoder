import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return(
        <nav className="NavBar">
            <Navbar variant="light" sticky="top" expand="sm">
                <Navbar.Brand >
                    <img src={'./multimedia/logo_amantes_verdes.png'} alt="logo_NavBar" height={100} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="helechos" >Helechos</Nav.Link>
                        <Nav.Link href="suculentas" >Suculentas</Nav.Link>
                        <Nav.Link href="pequenasInt" >Pequeñas de interior</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <NavLink to='/list' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lista</NavLink>
                <NavLink to='/detail' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Detalle</NavLink>

                <div className='"Categories'>
                    { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                    >{cat.description}</NavLink>)}
                </div>
                <div>
                    <CartWidget />
                </div>
            </Navbar>

        </nav>
    )
}

export default NavBar