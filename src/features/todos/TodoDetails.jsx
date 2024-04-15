import { useSelector } from "react-redux";
import SubTodo from "./SubTodo";
import { getTodo } from "./todoSlice";

/* eslint-disable react/prop-types */
function TodoDetails({ id, todosId }) {
  const todo = useSelector((state) => getTodo(state, todosId, id));
  // console.log(todo);

  return (
    <div className="bg-slate-200 rounded-lg p-6">
      {todo ? (
        <>
          <h2 className="font-bold text-[28px]">{todo.todoTitle}</h2>

          <div>
            <p className="text-xl">Notes:</p>
            <textarea
              className="bg-transparent outline-none text-lynch-700 resize-none w-full h-36"
              placeholder="add a new note..."
            />
          </div>
          <div>
            <p className="text-xl">Subtasks:</p>
            <SubTodo />
          </div>
        </>
      ) : (
        <p>Please select one</p>
      )}
    </div>
  );
}
export default TodoDetails;
