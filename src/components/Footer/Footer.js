import React from 'react';
import './Footer.css'

const Footer = () =>{

    return(
        <footer className="contFooter">
            <div className="fila1">
                <h3>Dirección</h3>
                <p>Mercado de flores de Cuemanco. </p>
                <p> Av. Canal Nacional 2000, Coapa, Cuemanco, Xochimilco.</p>
                <p> C.P. 16036, Ciudad de México, CDMX </p>
            </div>
            <div className='fila2'>
                <h3>Horarios en tienda</h3>
                <p>Lunes a sábados 10-19 hrs</p>
                <p>Domingos 10-18 hrs</p>
            </div>
            <div className='fila3'>
                <h3>Síguenos en redes</h3>
                <div className="redes-container">
                    <a className="red" href="https://www.facebook.com/Amantes-Verdes-100624208895637">
                        <img src="/multimedia/btn_fb_amantes.png" alt="Facebook Amantes Verdes" width="30px"/>
                    </a>
                    <a className="red" href="https://www.instagram.com/amantesverdes/">
                        <img src="/multimedia/btn_IG_amantes.png" alt="Instagram Amantes Verdes" width="30px"/>
                    </a>  
                </div>
                    
            </div>
            <div className="copyright">
                <p >Amantes Verdes 2022 ©</p>
            </div>
        </footer>
    )
} 

export default Footer