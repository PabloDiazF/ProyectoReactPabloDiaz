import React, { useEffect, useState } from 'react'

import './ItemCount.css'

const Contador = ({ stock, setQuantityToAdd }) => {
    const [contador, setContador] = useState(0)

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
        <div className="item-count">
            <button onClick={restar} disabled={contador === 0}>
                -
            </button>
            -<span> {stock === 0 ? 'No hay stock' : contador} </span>-
            <button onClick={aumentar} disabled={contador === stock}>
                +
            </button>
        </div>
    )
}

export default Contador
