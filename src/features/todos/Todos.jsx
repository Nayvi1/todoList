import { useSelector } from "react-redux";
import Todo from "./Todo";
import TodoDetails from "./TodoDetails";
import { getTodos } from "./todoSlice";
/* eslint-disable react/prop-types */
function Todos({ todoId }) {
  const { todo: todos } = useSelector((state) => getTodos(state, todoId));

  if (!todos.length) {
    return <h2>No Todos, start by adding one</h2>;
  }

  return (
    <div className="flex gap-5 mt-5 ">
      <div className="flex flex-col gap-2 w-full">
        {todos.map((todo) => {
          return <Todo key={todo.id} todoText={todo.todoTitle} />;
        })}
      </div>
      <div className="w-full">
        <TodoDetails />
      </div>
    </div>
  );
}
export default Todos;
