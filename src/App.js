
import './App.css';
import { useState } from 'react';

import Todo from './componentes/Todo';
import TodoForm from './componentes/TodoForm';
import Pesquisar from './componentes/Pesquisar';
import Filtro from './componentes/Filtro';
import ListaVazia from './componentes/ListaVazia';

function App() {

  const [todos, setTodos] = useState([]);

  const adicionarItemLista = (text, category) => {
    const novaLista = [...todos, 
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    },
  ];
  setTodos(novaLista);
  }

  const removerItem = (id) => {

    /* Isso cria uma cópia do array todos usando o operador spread (...). 
    O operador spread é usado para criar uma cópia superficial de um array ou objeto. 
    Isso é feito para não modificar diretamente o array original. */
    const lista = [...todos];

    /*Aqui, a função filter é usada para criar uma nova lista (filtroLista) que contém 
    todos os elementos do array novaLista cujo id é diferente do id passado como argumento para a função. 
    O método filter retorna um novo array com os elementos que atendem à condição fornecida na função de callback. */
    const novaLista = lista.filter((todo) => todo.id !== id ? todo : null);

    /*É usada para atualizar o estado todos com a nova lista filtrada. */
    setTodos(novaLista);

    /*A função filter percorre todos os elementos da lista. Se a condição (todo.id !== id) for 
    verdadeira para um determinado elemento, esse elemento será incluído na novaLista. Se for falsa, 
    o elemento será excluído do resultado, mas não será substituído por null. */
  }

  const tarefasCompletas = (id) => {
    const lista = [...todos];
    lista.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo); //Mudar o status completo para o contrario do que estava no status completo, pois ele pode complete e clica de novo para descompletar
    setTodos(lista)
  }

  //State para atualizar a busca em tempo real
  const [pesquisa, setPesquisa] = useState('');

  //State para Filtrar
  const [filtro, setFiltro] = useState('All');

  //State para Ordenação
  const [ordenacao, setOrdenacao] = useState('Asc')

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Pesquisar pesquisa={pesquisa} setPesquisa={setPesquisa}/>
      <Filtro filtro={filtro} setFiltro={setFiltro} setOrdenacao={setOrdenacao}/>
      <div className='todo-list'>
        {todos
        .filter((todo) => filtro === 'All'
        ? true
        : filtro == 'Completed'
        ? todo.isCompleted
        : !todo.isCompleted
        )
        .filter((todo) => todo.text.toLowerCase()
        .includes(pesquisa.toLowerCase())
        )
        .sort((a,b) => ordenacao === 'Asc' 
        ? a.text.localeCompare(b.text) 
        : b.text.localeCompare(a.text)
        )
        .map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} 
          removerItem={removerItem} 
          tarefasCompletas={tarefasCompletas} />
        ))}
      </div>
      <TodoForm adicionarItemLista={adicionarItemLista} />
    </div>
  );
}

export default App;

/*todo.text.toLowerCase(): Converte o texto da tarefa para minúsculas, garantindo que a comparação não seja sensível a maiúsculas/minúsculas.

.includes(pesquisa.toLowerCase()): Verifica se o texto da tarefa inclui a string de pesquisa (também convertida para minúsculas). 

sort((a, b) => ...): A função sort é utilizada para ordenar os elementos de um array. Ela recebe um callback que compara dois elementos do array (denominados aqui como a e b). O retorno do callback determina a ordem dos elementos no array final.*/
