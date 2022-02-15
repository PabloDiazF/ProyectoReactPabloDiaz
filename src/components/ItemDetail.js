import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { useParams, Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { getDoc } from 'firebase/firestore'
import { docRefById } from '../firebaseConfig'
import './ItemDetail.css'

const ItemDetail = () => {
    const { addItem, removeItem, isInCart } = useContext(CartContext)

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    useEffect(() => {
        // const specificProduct = productsList.find(e => e.id == id)
        const docReference = docRefById(id)
        getDoc(docReference)
            .then((doc) => {
                setProduct({ ...doc.data(), id: doc.id })
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    if (!product) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return (
        <div className="item-detail">
            <div className="container">
                <h1>Item Detail</h1>
                <hr />
                <div className="grid-container">
                    <div className="col">
                        {' '}
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                        {/* Si esta en el carrito muestro botones de finalizar compra y de quitar del carrito, sino muestro el contador*/}
                        {isInCart(product.id) ? (
                            <>
                                <Link className="btn" to="/cart">
                                    Finalizar compra
                                </Link>
                                <button className="btn" onClick={() => removeItem(product.id)}>
                                    Quitar del carrito
                                </button>
                            </>
                        ) : (
                            <ItemCount stock={product.stock} setQuantityToAdd={setQuantityToAdd} />
                        )}
                        {/* Si no esta en el carrito, muestro el boton para agregarlo, va a estar deshabilitado si la cantidad a agregar es 0 */}
                        {!isInCart(product.id) && (
                            <button
                                className="btn"
                                onClick={() => addItem(product, quantityToAdd)}
                                disabled={quantityToAdd === 0}
                            >
                                Agregar al carrito
                            </button>
                        )}
                    </div>
                    <div className="col">
                        <img src={product.pictureUrl} alt={product.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
