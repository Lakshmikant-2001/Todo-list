import { IoIosAddCircle } from 'react-icons/io';

function TodoForm({ todoInput, handleAddClick, handleInpChange, handleFilterChange }) {
  return (
    <form id="todo-form">
      <div>
        <input id="todo-input" type="text" placeholder="add your todo"
          onChange={handleInpChange} value={todoInput} autoComplete="off" />
        <button id="add-todo" onClick={handleAddClick}><IoIosAddCircle /></button>
      </div>
      <select id="todo-filter" onChange={handleFilterChange}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </form>
  );
}

export default TodoForm;