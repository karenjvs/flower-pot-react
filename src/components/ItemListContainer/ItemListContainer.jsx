import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        
        <section className="ItemListContainer__greeting">
            <h2>{ greeting }</h2>
        </section>
    )
}
export default ItemListContainer