import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defualtTodos = [
  {text: 'Cortar Cebolla', completed: true },
  {text: 'Curso de JS', completed: false },
  {text: 'Curso de Html', completed: false },
  {text: 'Curso de backend', completed: true }
]

function App() {
  return (
    <>

      <TodoCounter completed={15} total={25}/>
      <TodoSearch />

      <TodoList>
          {defualtTodos.map(todo =>(
            <TodoItem
            key ={todo.text}
            text={todo.text}
            completed = {todo.completed} />
          ))}
            
      </TodoList>

      <CreateTodoButton />

      </>
  );

}

export default App;
