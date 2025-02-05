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
  {text: 'Course backend', completed: true },
  {text: 'Course Angular', completed: true }
]

function App() {

  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue ] = React.useState('');

  const completedTodo = todos.filter(todo => !!todo.completed).length
  console.log(completedTodo);
  const totalTodos = defaultTodos.length;
  
  // let totalTodos = 0;
  console.log('Hi, you are writing ' + searchValue);

  return (
    <>  
      <TodoCounter completed={completedTodo} total={totalTodos}/>
      <TodoSearch searchValue = {searchValue} setSearchValue = {setSearchValue}  />

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
