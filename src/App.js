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
  const totalTodos = defaultTodos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  })

  const completeTodos = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const newTodos = todos.filter((todo) => 
      todo.text !== text )
      setTodos(newTodos)
    }
  
  

  return (
    <>  
      <TodoCounter completed={completedTodo} total={totalTodos}/>
      <TodoSearch searchValue = {searchValue} setSearchValue = {setSearchValue}  />

      <TodoList>
          {searchedTodos.map(todo =>(
            <TodoItem
            key ={todo.text}
            text={todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodos(todo.text)} 
            onDelete = {() => deleteTodos(todo.text)} 
            />
            
          ))}
            
      </TodoList>

      <CreateTodoButton />

      </>
  );

}

export default App;
