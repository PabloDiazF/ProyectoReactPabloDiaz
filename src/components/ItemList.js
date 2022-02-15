import Item from './Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    //Si no hay productos
    if (products.length === 0) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    //Si ya hay productos muestro los productos
    return (
        <div className="item-list">
            {products.map(({ name, price, stock, pictureUrl, id, category }) => (
                <Item
                    name={name}
                    price={price}
                    stock={stock}
                    pictureUrl={pictureUrl}
                    id={id}
                    category={category}
                    key={id}
                />
            ))}
        </div>
    )
}

export default ItemList
