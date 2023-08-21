import { useState } from 'react';
import TodoBoard from './components/TodoBoard';
import './styles/App.css';
import TodoForm from './components/TodoForm';

function App() {

  const [boards, setBoards] = useState([
    {id: 1, title: 'Выполнены', color: 'green', items: [
      {userId: 1, id: 1, title: 'inventore aut nihil minima laudantium hic qui omnis'},
      {userId: 2, id: 2, title: 'ego'},
      {userId: 3, id: 3, title: 'invento23 laudantium hic qui omnis'}]
    },
    {id: 2, title: 'В работе', color: 'orange', items: [
      {userId: 4, id: 1, title: 'inventor232e aut nihil minima laudantium hic qui omnis'},
      {userId: 5, id: 2, title: 'ego'},
      {userId: 6, id: 3, title: 'inveni omnis'}]
    }
  ]) 

  const createTodo = (newTodo) => {
    setBoards([...boards, newTodo]);
  }

  const updateItemsState = (updatedItem) => {
    const newTodos = [...boards];
    const targetIndex = newTodos.findIndex(obj => obj.id === updatedItem.id);
    newTodos[targetIndex] = updatedItem;
    setBoards(newTodos);
  }

  return (
    <div className="App">
      <div className="todo__container">
        {boards.map(board => 
          <TodoBoard 
            todos={board.items} 
            updateItemsState={updateItemsState} 
            color={board.color} 
            key={board.id} 
            boardTitle={board.title}
          />
        )}
      </div>
      <TodoForm create={createTodo}/>
    </div>
  );
}

export default App;
