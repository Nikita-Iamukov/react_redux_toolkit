import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if(text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
    }
    setText('')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(x => x.id !== id))
  }

  const toggleTodoCompleted = (id) => {
    setTodos(todos.map(
      x => {
        if(x.id !== id) return x
      return {
        ...x,
        completed: !x.completed
      }
    }
    ))
  }

  return (
    <div className="App">
      <CreateTodo
        text={text}
        handleInput={setText}
        handleSubmit={addTodo}
      />
      <TodoList 
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    </div>
  );
}

export default App;
