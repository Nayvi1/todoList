import Todo from "./Todo";
import TodoDetails from "./TodoDetails";
/* eslint-disable react/prop-types */
function Todos() {
  return (
    <div className="flex gap-5 mt-5 ">
      <div className="flex flex-col gap-2 w-full">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      <div className="w-full">
        <TodoDetails />
      </div>
    </div>
  );
}
export default Todos;
