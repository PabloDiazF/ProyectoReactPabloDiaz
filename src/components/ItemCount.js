import React, { useEffect, useState } from 'react'

const Contador = ({stock,setQuantityToAdd}) => {

    const [ contador, setContador  ] = useState(0)

    console.log({contador})

    const aumentar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }

    useEffect(() => {
        setQuantityToAdd(contador)
    }, [contador])

    return (
        <div>
            <button onClick={ restar } 
            disabled={ contador === 0 } >
                -
            </button>
            -
            <span> { stock === 0 ? 'No hay stock' : contador } </span>
            -
            <button onClick={aumentar }  
            disabled={contador === stock}>
                +
            </button>
        </div>
    )
}

export default Contador