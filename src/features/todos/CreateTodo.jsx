import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { createTodo } from "./todoSlice";
/* eslint-disable react/prop-types */
function CreateTodo({ onClose, id }) {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(createTodo(formJson));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14 ">
      <Input name="name" />
      <input type="text" hidden defaultValue={id} name="id" />
      <div className="flex gap-2 items-center self-end">
        <Button type="secondery" onClick={onClose}>
          Close
        </Button>
        <Button submit>Create</Button>
      </div>
    </form>
  );
}
export default CreateTodo;
