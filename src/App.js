//Hooks
import { useEffect, useState } from "react";
//Components
import Navbar from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filteredTodoList, setFilteredTodoList] = useState([]);
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
  const handleFilterChange = (e) => {
    setFilterType(e.target.value)
  }
  const getFilteredTodos = () => {
    switch(filterType){
      case 'pending' : 
        return todoList.filter(list => list.isCompleted === false);
      case 'completed' :
        return todoList.filter(list => list.isCompleted === true);
      default:
        return todoList;
    }
  }
  useEffect(()=>{setFilteredTodoList(getFilteredTodos())},
    [todoList,filterType]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <TodoForm todoInput={todoInput} handleAddClick={handleAddClick}
         handleInpChange={handleInpChange} handleFilterChange={handleFilterChange} />
        <TodosContainer todoList={filteredTodoList} handleComplete={handleComplete} handleDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
