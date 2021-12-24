
import Item from './Item'

const ItemList = (props) => {
    
    //Si no hay productos
    if( props.products.length === 0 ){
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }
    
    //Si ya hay productos muestro los productos
    return (
        <div>
            {
                props.products.map( p => (

                    <Item 
                        nombre={p.nombre} 
                        precio={p.precio} 
                        stock={p.stock}
                        id={p.id}
                        key={p.id}
                    />

                ) )
            }
        </div>
    )
}

export default ItemList