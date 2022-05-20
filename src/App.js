//Hooks
import { useState } from "react";
//Components
import Navbar from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const handleInpChange = (e) => {
    setTodoInput(e.target.value);
  }
  const handleAddClick = (e) => {
    e.preventDefault();
    if (todoInput === '')
      return;
    setTodoList([...todoList, { name: todoInput, isCompleted: false }]);
    setTodoInput('');
  }
  const handleComplete = (name) => {
    setTodoList(todoList.map(list => {
      if (list.name === name)
        return { ...list, isCompleted: true };
      return list;
    }));
  }
  const handleDelete = (name) => {
    setTodoList(todoList.filter(list => list.name !== name))
  }
  return (
    <div className="App">
      <Navbar />
      <main>
        <TodoForm todoInput={todoInput} handleAddClick={handleAddClick} handleInpChange={handleInpChange} />
        <TodosContainer todoList={todoList} handleComplete={handleComplete} handleDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
