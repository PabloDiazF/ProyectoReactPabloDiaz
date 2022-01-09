import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { useParams, Link } from "react-router-dom";


import { productsList } from '../data';
import ItemCount from './ItemCount';


const ItemDetail = () => {

    const { addItem, removeItem, isInCart } = useContext(CartContext)

    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    

    useEffect(() => {
        const specificProduct = productsList.find(e => e.id == id)

        setProduct(specificProduct)
    }, [])

    return (
        <div>
            <h1>Item Detail</h1>
            <hr />
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.image} alt="" />

            {/* Si esta en el carrito muestro botones de finalizar compra y de quitar del carrito, sino muestro el contador*/}
            {
                isInCart(product.id)
                ?
                <>
                    <Link to="/cart">
                        Finalizar compra
                    </Link>
                    <button onClick={() => removeItem(product.id)}>
                        Quitar del carrito
                    </button>
                </>

                :
                <ItemCount stock={ product.stock } setQuantityToAdd={setQuantityToAdd}/>
            }
            {/* Si no esta en el carrito, muestro el boton para agregarlo, va a estar deshabilitado si la cantidad a agregar es 0 */}
            {
                !isInCart(product.id) &&
                <button onClick={ () => addItem(product, quantityToAdd) } disabled={quantityToAdd === 0}>
                    Agregar al carrito
                </button>
            }

        </div>
    )
}

export default ItemDetail
