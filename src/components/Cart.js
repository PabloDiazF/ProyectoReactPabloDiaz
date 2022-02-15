import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

import './Cart.css'

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext)

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)

    return (
        <div className="cart-page">
            {cart.length === 0 ? (
                <ul className="items-container">
                    <h2>No tienes productos en tu carrito</h2>
                    <Link to="/products">Ir a productos</Link>
                </ul>
            ) : (
                <ul className="items-container">
                    <li>
                        <div></div>
                        <div>Nombre</div>
                        <div>Cantidad</div>
                        <div>Precio unitaro</div>
                        <div>Precio total</div>
                        <div></div>
                    </li>
                    {cart.map((producto) => (
                        <li key={producto.id}>
                            <div className="image">
                                <img src={producto.pictureUrl} />
                            </div>
                            <div>{producto.name}</div>
                            <div>
                                Cantidad:
                                {producto.quantity}
                            </div>
                            <div>Unitario: ${producto.price}</div>
                            <div>Precio total: ${producto.quantity * producto.price}</div>
                            <button onClick={() => removeItem(producto.id)}>Quitar</button>
                        </li>
                    ))}

                    <li>
                        {' '}
                        <div>Total :{total}</div>{' '}
                        <div>
                            <button>
                                <Link to="/checkout">Finalizar compra</Link>
                            </button>
                        </div>{' '}
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Cart
