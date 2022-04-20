
import React from 'react';
import { useState } from "react";

const Form = () => {
    const [ input, setInput ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

/*     const handleKeyDown = (e) => {
        console.log(e);
        if(e.code === 'Space') {
            e.preventDefault()
        }
    } */

    return (
       /*  <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e) => setInput(e.target.value)} />
            onKeyDown={(e) => handleKeyDown()}
            <button type='submit'>enviar</button>
        </form> 
    ) */

    <div className="contenedor_formulario">
    
        <div className="info-empresa">
            <ul className="nuestra-info">
                <li><i className="fa fa-map-marker"></i> mercado de Cuemanco</li>
                <li><i className="fa fa-mobile"></i> 000 000 000</li>
                <li><i className="fa fa-envelope"></i> amantes.verdes@gmail.com</li>
            </ul>
        </div>
        <div className="contacto">
            <form className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" onChange={(e) => setInput(e.target.value)} required/>
                </p>
                <p>
                    <label>Correo electrónico</label>
                    <input type="email" onChange={(e) => setInput(e.target.value)} name="email" required/>
                </p>
                <p>
                    <label>Teléfono</label>
                    <input type="text" onChange={(e) => setInput(e.target.value)} name="teléfono" required/>
                </p>
                <p class="full">
                    <label>Mensaje</label>
                    <textarea name="mensaje" onChange={(e) => setInput(e.target.value)} required></textarea>
                </p>
                <p class="full">
                    <button type='submit' className="boton-enviar">Enviar</button>
                </p>
            </form>
        </div>
    
</div>

    )
}


export default Form

