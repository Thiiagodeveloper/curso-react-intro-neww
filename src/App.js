import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cut Onion', completed: true },
  {text: 'Course JS', completed: false },
  {text: 'Course Html', completed: false },
  {text: 'Course backend', completed: true }
]

function App() {
  return (
    <>

      <TodoCounter completed={15} total={25}/>
      <TodoSearch />

      <TodoList>
          {defaultTodos.map(todo =>(
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
