import Title from "../Title/Title"
import NavBar from "../NavBar/NavBar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

function Container () {
    let title = 'Flower Pot'

    return (
        <>
            <NavBar />
            <Title title={ title } />
            <ItemListContainer greeting={ 'Saludo nuevo cliente' } />
        </>
    )
}

export default Container
