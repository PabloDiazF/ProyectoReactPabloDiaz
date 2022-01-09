import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

import './Cart.css'

const Cart = () => {


    const { cart, removeItem } = useContext(CartContext)


    const total = cart.reduce( (acc, prod) => acc + prod.precio * prod.quantity, 0 );
    


    return (
        <div className='cart-page'>
            {
                cart.length === 0 ? (
                    <ul className='items-container'>
                        <h2>No tienes productos en tu carrito</h2>
                        <Link to="/products">
                             Ir a productos
                        </Link>
                    </ul>
                ) : (
                    <ul className='items-container'>

                    {
      
                      cart.map( producto => (
                          <li key={producto.id}>
                              <div className='image'>
                                    <img src={producto.image} />
                              </div>
                              <div>
                                  Nombre: 
                                  {producto.nombre}
                              </div>
                              <div>
                                  Cantidad:
                                  {producto.quantity}
                              </div>
                              <div>
                                  Precio unitario:
                                  ${producto.precio}
                              </div>
                              <div>
                                  Precio total: 
                                  ${producto.quantity * producto.precio}
                              </div>
                              <button onClick={() => removeItem(producto.id)}>
                                  Quitar
                              </button>
                          </li>
                      ))
                    }
                  
                  <li>
                        Total : 
                        {total}
                    </li>
                </ul>
                )
            }

        </div>
    )
}

export default Cart
