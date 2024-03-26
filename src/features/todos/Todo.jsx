/* eslint-disable react/prop-types */
function Todo({ todoText = "Todo" }) {
  return (
    <div className="w-full hover:bg-lynch-100 p-3 rounded-lg cursor-pointer ">
      <label className="relative group pl-8 cursor-pointer">
        <input type="checkbox" className="absolute w-0 h-0 opacity-0 peer" />
        <span className="absolute top-0 left-0 h-5 w-5 border border-lynch-900 transition-[border] duration-100 rounded-full group-hover:sm:border-[4px] peer-checked:!border-[10px]"></span>
        {todoText}
      </label>
    </div>
  );
}
export default Todo;
