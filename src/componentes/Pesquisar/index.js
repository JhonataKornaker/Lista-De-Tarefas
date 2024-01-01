import './Pesquisar.css'

const Pesquisar = ({ pesquisa, setPesquisa }) => {
    return (
        <div className='pesquisar'>
            <h2>Pesquisar:</h2>
            <input 
            type='text' 
            value={pesquisa} 
            onChange={(e) => setPesquisa(e.target.value)} 
            placeholder='Digite para pesquisar . . .'/>
        </div>
    )
}

export default Pesquisar;

/*(e) => setPesquisa(e.target.value): Aqui, é utilizado um arrow function (função de seta) como callback para o evento onChange. 
Quando o valor do campo muda, esta função é executada.*/