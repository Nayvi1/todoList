/* eslint-disable react/prop-types */
function Todo({
  todoText = "Todo",
  onComplete,
  id,
  onClick,
  checked,
  onDelete,
  isSelected,
}) {
  return (
    <div
      onClick={(e) => onClick(id, e)}
      className={`w-full hover:bg-lynch-100 p-3 rounded-lg cursor-pointer transition flex items-center justify-between ${
        isSelected ? "!bg-lynch-200" : ""
      }`}
    >
      <label className="relative group pl-8 cursor-pointer flex items-start">
        <input
          onClick={(e) => onComplete(id, e)}
          type="checkbox"
          className="absolute w-0 h-0 opacity-0 peer"
          defaultChecked={checked}
        />
        <span className="absolute top-0 left-0 h-5 w-5 border border-lynch-900 transition-[border] duration-100 rounded-full group-hover:sm:border-[4px] peer-checked:!border-[10px]"></span>
        <span className="peer-checked:text-lynch-300 peer-checked:line-through">
          {todoText}
        </span>
      </label>
      {checked ? (
        <img
          src="/svg/delete.svg"
          alt=""
          className="w-5"
          onClick={() => onDelete(id)}
        />
      ) : null}
    </div>
  );
}
export default Todo;
