import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import TodoDetails from "./TodoDetails";
import { completeTodo, deleteTodo, getTodos } from "./todoSlice";
import { useState } from "react";
/* eslint-disable react/prop-types */
function Todos({ todosId }) {
  const { todo: todos } = useSelector((state) => getTodos(state, todosId));
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  function handleComplete(id, e) {
    e.stopPropagation();
    dispatch(completeTodo({ id, todosId }));
  }

  function handleClick(id, e) {
    e.stopPropagation();
    setId(id);
  }

  function handleDelete(id) {
    dispatch(deleteTodo({ id, todosId }));
  }

  if (!todos.length) {
    return <h2>No Todos, start by adding one</h2>;
  }

  return (
    <div className="flex gap-5 mt-5 flex-col sm:flex-row">
      <div className="flex flex-col gap-2 sm:w-1/2">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              todoText={todo.todoTitle}
              onComplete={handleComplete}
              onClick={handleClick}
              checked={todo.checked}
              onDelete={handleDelete}
              isSelected={todo.id === id}
            />
          );
        })}
      </div>
      <div className="sm:w-1/2 sticky bottom-12 py-7 sm:static">
        <TodoDetails id={id} todosId={todosId} />
      </div>
    </div>
  );
}
export default Todos;
