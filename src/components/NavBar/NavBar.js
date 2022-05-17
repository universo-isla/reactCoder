import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { firestoreDb } from '../../service/firebase';
import { getDocs, collection } from 'firebase/firestore';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return (
        <nav className="NavBar" >
            <div className='logoNavBar'>
                <Link to='/'>
                    <img src={'/multimedia/logo_amantes_verdes.png'} alt="logo_NavBar" height={100} />
                </Link>
            </div>
            <div className="Categories" >
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >{cat.descripcion}</NavLink>)}
            </div>
            <div className='CartWinNavBar'>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar