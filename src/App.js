import { useState } from 'react';
import TodoCompleteList from './components/TodoCompleteList';
import './styles/App.css';
import TodoForm from './components/TodoForm';
import TodoPlannedList from './components/TodoPlannedList';

function App() {

  const [todos, setTodos] = useState([
    {userId: 7, id: 121, title: 'inventore aut nihil minima laudantium hic qui omnis', status: 'completed'},
    {userId: 7, id: 122, title: 'ego', status: 'completed'},
    {userId: 7, id: 123, title: 'inventore aut nihil minima laudantium hic qui omnis', status: 'progress'},
    {userId: 7, id: 123, title: 'inventore aut nihil minima laudantium hic qui omnis', status: 'planned'}
  ]) 

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <div className="todo__container">
        <TodoCompleteList todos={todos}/>
        <TodoPlannedList todos={todos}/>
      </div>
      <TodoForm create={createTodo}/>
    </div>
  );
}

export default App;
