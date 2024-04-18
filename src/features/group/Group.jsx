import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTodos } from "../todos/todoSlice";

/* eslint-disable react/prop-types */
function Groups({ groupName, categoryName, onEdit, id, onDelete }) {
  const numberOfTodos = useSelector((state) => getTodos(state, id))?.todo
    .length;

  return (
    <div className="w-full flex justify-between items-center border-b border-b-lynch-950">
      <div>
        <Link to={`/todos/${id}`}>
          <h2 className="cursor-pointer text-xl sm:text-2xl font-semibold capitalize">
            {groupName.toLowerCase()}
          </h2>
        </Link>
        <p className="text-lynch-500 capitalize">
          {!numberOfTodos
            ? "No Task"
            : numberOfTodos === 1
            ? "One Task"
            : numberOfTodos + " Tasks"}{" "}
          , {categoryName.toLowerCase()}
        </p>
      </div>
      <div className="flex gap-3 [&>img]:sm:w-10 [&>img]:w-7 [&>img]:cursor-pointer">
        <img src="/svg/edit.svg" onClick={() => onEdit(id)} alt="" />
        <img src="/svg/delete.svg" alt="" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}
export default Groups;
