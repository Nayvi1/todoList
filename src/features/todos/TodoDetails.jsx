import SubTodo from "./SubTodo";

function TodoDetails() {
  return (
    <div className="bg-slate-200 rounded-lg p-6">
      <h2 className="font-bold text-[28px]">TodoDetails</h2>
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
    </div>
  );
}
export default TodoDetails;
