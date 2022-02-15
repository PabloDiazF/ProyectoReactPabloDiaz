import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ name, price, stock, pictureUrl, id, category }) => {
    return (
        <div className="item">
            <h2>{name}</h2>
            <img src={pictureUrl} alt={name} />
            <div className="content">
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
                <p>Categoria: {category}</p>

                <Link to={`/product/${id}`}>Ver producto</Link>
            </div>
        </div>
    )
}

export default Item
