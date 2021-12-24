import React, { useState } from 'react'

const Contador = (props) => {

    const [ contador, setContador  ] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <button onClick={ aumentar } disabled={contador === props.stock}>
                Sumar
            </button>
            -
            <span> { props.stock === 0 ? 'No hay stock' : contador } </span>
            -
            <button onClick={ restar } disabled={ contador === 0 } >
                Restar
            </button>
        </div>
    )
}

export default Contador