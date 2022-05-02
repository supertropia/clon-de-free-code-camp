import React from 'react';
import '../hojas-de-estilo/testimonio.css';
// aca se vincula la hoja de estilo 


function Testimonio(props) {
    return (
            <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                //${}``` son plantillas literales comillas nvertidas alt cosito arriba shift
                src={require(`../imagenes/testimonio-${props.imagen}.png`)} //entre{} se interpreta que hay js ahi adentro
                alt='foto de emma' />
        
        
        <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                <strong>{props.nombre} </strong>en {props.pais}
                </p>

                <p className='cargo-testimonio'>
                {props.cargo} en 
                <strong>{props.empresa}</strong>
                </p>
                
                <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
        </div>







    );
}






export default Testimonio; // para poder usarlo en app.js -es una exportacion por defect. expotar este componente.En la exportacion nombrada se pueden exportar varios componentes.

//expotacion nombrada va con llaves al ppio d ela funcion  se puede exportar varios componentes. si es po default oo puede exportarse 1.cd 