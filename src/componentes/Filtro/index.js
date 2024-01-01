import './Filtro.css'

const Filtro = ({filtro, setFiltro, setOrdenacao}) => {
    return (
        <div className='filtro'>
            <h2>Filtrar:</h2>
            <div className='opcoes-filtro'>
                <div>
                    <p>Status:</p>
                    <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setOrdenacao('Asc')}>Asc</button>
                    <button onClick={() => setOrdenacao('Desc')}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filtro;