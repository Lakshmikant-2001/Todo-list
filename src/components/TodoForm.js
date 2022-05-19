function TodoForm({todoInput,handleAddClick,handleInpChange}) {
  return (
    <form>
      <div>
        <input id="todo-input" type="text" placeholder="add your todo"
          onChange={handleInpChange} value={todoInput} autoComplete="off"/>
        <button id="add-todo-btn" onClick={handleAddClick}>+</button>
      </div>
      <select id="todo-filter">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </form>
  );
}

export default TodoForm;