//React-icons
import { useRef } from "react";
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
  const todoWrapperRef = useRef('');
  const addExitAnimation = () => {
    todoWrapperRef.current.classList.add("exit-animation");
  }
  return (
    <div className="ind-todo-wrapper entry-animation" ref={todoWrapperRef}>
      <div>
        {todo.isCompleted ? <IoCheckmarkDoneCircleSharp className="completed-animation" /> : <MdPending />}
        <li>{todo.name}</li>
      </div>
      <div>
        <button className={`btn ${disabledClass}`} onClick={() => handleComplete(todo.id)} tabIndex={!todo.isCompleted ? "1" : "-1"}>complete</button>
        <button className="btn" onClick={() => {
          addExitAnimation();
          setTimeout(() => {
            todoWrapperRef.current.classList.remove("exit-animation");
            handleDelete(todo.id);
          }, 300);
        }} tabIndex="1">delete</button>
      </div>
    </div >
  );
}

export default TodosContainer;