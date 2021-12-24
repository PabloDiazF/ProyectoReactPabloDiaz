import React from 'react'
import {Link} from 'react-router-dom'
//Componentes



const Item = (props) => {

    console.log(props.id)


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

            <Link to={`${props.id}`}>Ver producto</Link>

        </div>
    )
}

export default Item