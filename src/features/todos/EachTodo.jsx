function EachTodo() {
  const editOn = false;
  return (
    <div className="flex justify-between items-center">
      <label className="flex gap-1 text-lynch-500 cursor-pointer">
        <input type="checkbox" className="w-5" />

        {editOn ? (
          <input
            type="text"
            className="flex gap-1 text-lynch-500 cursor-pointer outline-none placeholder:text-lynch-300"
          />
        ) : (
          "%TODO NAME"
        )}
      </label>
      <img src="/svg/delete.svg" className="w-5 cursor-pointer" alt="" />
    </div>
  );
}
export default EachTodo;
