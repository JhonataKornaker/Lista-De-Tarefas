import './Todo.css'

const Todo = ({todo, removerItem, tarefasCompletas}) => {
    return (
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className='content'>
              <p>{todo.text}</p>
              <p className='categoty'>({todo.category})</p>
            </div>
            <div>
              <button className='complete' onClick={() => tarefasCompletas(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removerItem(todo.id)}>x</button>
            </div>
          </div>  
    )
}

export default Todo;

/*INFORMAÇÕES
onClick={() => removerItem(todo.id)}:
Portanto, o uso de () => removerItem(todo.id) garante que a função removerItem seja 
chamada apenas no evento de clique, não durante a renderização. Os parênteses vazios () indicam que 
a função não recebe nenhum argumento diretamente do evento de clique.*/