import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getCategories } from '../../asyncmock';
import { firestoreDb } from '../../service/firebase';
import { getDocs, collection } from 'firebase/firestore';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        // getCategories().then(categories => {
        //     setCategories(categories)
        // })
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data}
            })
            setCategories(categories)
        })
    }, [])

    /* return(
        <nav className="NavBar">
            <Navbar variant="light" sticky="top" expand="sm">
                <Link to='/'>
                    <Navbar.Brand >
                        <img src={'/multimedia/logo_amantes_verdes.png'} alt="logo_NavBar" height={100} />
                    </Navbar.Brand>
                </Link>
                
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {/* <Nav>
                        <Nav.Link href="helechos" >Helechos</Nav.Link>
                        <Nav.Link href="suculentas" >Suculentas</Nav.Link>
                        <Nav.Link href="pequenasInt" >Pequeñas de interior</Nav.Link>
                    </Nav> 

                

                    <Nav className='"Categories'>
                        { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                        className={({isActive}) => isActive ? 'ItemSeleccionado' : 'navItem'}
                        >{cat.descripcion}</NavLink>)}
                    </Nav>
                    <div>
                        <CartWidget />
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </nav>
    ) */
    return (
        <nav className="NavBar" >
            <Navbar>
                <Link to='/'>
                    <img src={'/multimedia/logo_amantes_verdes.png'} alt="logo_NavBar" height={100} />
                </Link>
                    <Navbar.Collapse>
                        <div className="Categories" >
                            { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                            className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                            >{cat.id}</NavLink>)}
                        </div>
                    </Navbar.Collapse>
                <CartWidget />
          </Navbar>
        </nav>
    )
}

export default NavBar