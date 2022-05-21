//React-icons
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdPending } from 'react-icons/md'

function TodosContainer({ todoList, handleComplete, handleDelete }) {
  return (
    <div id="todos-container">
      {todoList.map(todo => {
        return <Todo todo={todo} key={todo.id} handleComplete={handleComplete} handleDelete={handleDelete} />
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
        <button className={disabledClass} onClick={() => handleComplete(todo.id)}
          disabled={todo.isCompleted}>complete</button>
        <button className="btn" onClick={() => handleDelete(todo.id)}>delete</button>
      </div>
    </div>
  );
}

export default TodosContainer;