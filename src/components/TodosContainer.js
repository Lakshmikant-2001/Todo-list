import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdPending } from 'react-icons/md'

function TodosContainer({ todoList, handleComplete, handleDelete }) {
  let key = 0;
  return (
    <div id="todos-container">
      {todoList.map(todo => {
        key++;
        return <Todo todo={todo} key={key} handleComplete={handleComplete} handleDelete={handleDelete} />
      })}
    </div>
  );
}

function Todo({ todo, handleComplete, handleDelete }) {
  const disabledClass = todo.isCompleted ? "disabled-btn" : '';
  return (
    <div className="ind-todo-wrapper">
      <div>
        {todo.isCompleted ? <IoCheckmarkDoneCircleSharp /> : <MdPending />}
        <li>{todo.name}</li>
      </div>
      <div>
        <button className={disabledClass} onClick={() => handleComplete(todo.name)} disabled={todo.isCompleted}>complete</button>
        <button className="btn" onClick={() => handleDelete(todo.name)}>delete</button>
      </div>
    </div>
  );
}

export default TodosContainer;