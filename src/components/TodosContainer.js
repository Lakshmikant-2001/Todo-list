function TodosContainer({ todoList,handleComplete,handleDelete }) {
  let key = 0;
  return (
    <div id="todos-container">
      {todoList.map(todo => {
        key++;
        return <Todo todo={todo} key={key} handleComplete={handleComplete} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

function Todo({ todo,handleComplete,handleDelete }) {
  return (
    <div className="ind-todo-wrapper">
      <li>{todo.name}</li>
      <button onClick={()=> handleComplete(todo.name)} disabled={todo.isCompleted}>complete</button>
      <button onClick={() => handleDelete(todo.name)}>delete</button>
    </div>
  );
}

export default TodosContainer;