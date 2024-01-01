import { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({adicionarItemLista}) => {

    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');

    const btnSalvar = (e) => {
        e.preventDefault();
        if(!valor || !categoria) return; //Validação para nao criar tarefas em branco
        //Caso nao seja nulo os valores:
        //adiciona no Todo
        adicionarItemLista(valor, categoria);
        //Limpa os Campos
        setValor('');
        setCategoria('');
    }

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={btnSalvar}>
                <input 
                value={valor}
                type='text' 
                placeholder='Digite o titulo' 
                onChange={(e) => setValor(e.target.value)}/>
                <select 
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm

/*ANOTAÇÕES

onChange={(e) => setValor(e.target.value)} - onChange captura as alterações feitas pelo usuário em campos, no caso no <input>
(e) => setValor(e.target.value) - (e) é a variavel (objeto) que é passado automaticamento quando o evento onChange ocorre
                                - (e.target.value) - atualiza o estado chamado valor do hook
*/