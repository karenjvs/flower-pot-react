import './Title.css' 

function Title({ title = 'Default title' }) {
    return (
        <div className='Title'>
            <h1>{ title }</h1>
        </div>
    )   
}

export default Title