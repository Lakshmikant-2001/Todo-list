import { useState } from "react";

function TodoForm() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const handleInpChange = (e) => {
    setTodoInput(e.target.value);
  }
  const handleAddClick = (e) => {
    e.preventDefault();
    if(todoInput == '')
      return;
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
  }
  return (
    <form>
      <div>
        <input id="todo-input" type="text" placeholder="add your todo"
          onChange={handleInpChange} value={todoInput} />
        <button id="add-todo-btn" onClick={handleAddClick}>+</button>
      </div>
      <select id="todo-filter">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
      {todoList.map(todo => <li key={todo}>{todo}</li>)}
    </form>
  );
}

export default TodoForm;