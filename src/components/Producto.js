import React from 'react'
//Componentes
import Contador from './Contador'


const Producto = (props) => {


    return (
        <div style={{border: 'solid 2px red'}}>

            <h2>Producto</h2>
            <hr />
            <p>
                { props.nombre }
            </p>
            <p>
                Precio: ${ props.precio }
            </p>
            <p>
                Stock: { props.stock }
            </p>

            <Contador stock={ props.stock } />

        </div>
    )
}

export default Producto