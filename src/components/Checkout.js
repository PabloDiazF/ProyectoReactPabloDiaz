import { useState, useRef, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import './Checkout.css'

const Checkout = () => {
    const { clear } = useContext(CartContext)
    const [formSended, setFormSended] = useState(false)

    const nameRef = useRef(null)
    const emailRef = useRef(null)

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if (nameRef.current.value && emailRef.current.value) {
            setFormSended(true)
            clear()
        }
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <h2>Ingrese sus datos y nos pondremos en contacto contigo</h2>
            <hr />
            <form>
                <div className="form-group">
                    {' '}
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" ref={nameRef} />
                </div>
                <div className="form-group">
                    {' '}
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailRef} />
                </div>

                <button type="submit" onClick={handleSubmitForm}>
                    Enviar datos
                </button>
            </form>
            {formSended && (
                <div>
                    <h2>Datos enviados</h2>
                </div>
            )}
        </div>
    )
}
export default Checkout
