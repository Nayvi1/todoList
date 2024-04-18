import { useDispatch, useSelector } from "react-redux";
// import SubTodo from "./SubTodo";
import { addNote, getTodo } from "./todoSlice";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function TodoDetails({ id, todosId }) {
  const todo = useSelector((state) => getTodo(state, todosId, id));

  const dispatch = useDispatch();

  function handleBlur(e) {
    const value = e.target.value;
    dispatch(addNote({ id, todosId, value }));
  }

  const ref = useRef();

  function handleFocus() {}

  useEffect(() => {
    if (ref.current) {
      ref.current.value = todo?.note;
    }
  }, [todo?.note]);

  /**
   * TODO:
   * be able to add a note
   */

  return (
    <div className="bg-slate-200 rounded-lg p-6">
      {todo ? (
        <>
          <h2 className="font-bold text-[28px] break-words">
            {todo.todoTitle}
          </h2>

          <div>
            <p className="text-xl">Notes:</p>
            <textarea
              ref={ref}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className="bg-transparent outline-none text-lynch-700 resize-none w-full h-36"
              placeholder="add a new note..."
            />
          </div>
          {/* <div>
            <p className="text-xl">Subtasks:</p>
            <SubTodo />
          </div> */}
        </>
      ) : (
        <p>Please select one</p>
      )}
    </div>
  );
}
export default TodoDetails;
