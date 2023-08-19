import React from 'react'
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useState } from 'react';
import '../styles/TodoForm.css';

const TodoForm = ({create}) => {
    const [title, setTitle] = useState('');

    const createTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            title: title,
            completed: false
        }
        create(newTodo);
        // setTodos([...todos, newTodo])
    }

    return (
        <form>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Введите название дела"
            />
            <MyButton onClick={createTodo}>Добавить</MyButton>
        </form>
    )
}

export default TodoForm
