import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { createGroup, editGroup, getGroupById } from "./groupSlice";
/* eslint-disable react/prop-types */
function GroupForm({ method, id, onClose }) {
  const disptach = useDispatch();
  const group = useSelector((state) => getGroupById(state, id));

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    switch (method) {
      case "post":
        disptach(createGroup(formJson));
        break;
      case "patch":
        disptach(editGroup(formJson));
        break;
      default:
        break;
    }

    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 flex flex-col gap-14 rounded-b-lg"
    >
      <div className="flex flex-col gap-6 [&>label]:flex [&>label]:flex-col [&_input]:h-10 [&_input]:outline-none [&_input]:rounded-md [&_input]:bg-slate-200 [&_input]:border [&_input]:border-lynch-300 [&_input]:px-3">
        <label>
          <span>Name</span>
          <input
            defaultValue={method === "patch" ? group.name : ""}
            required
            type="text"
            name="name"
          />
        </label>
        <label>
          <span>category</span>
          <input
            defaultValue={method === "patch" ? group.category : ""}
            required
            type="text"
            name="category"
          />
        </label>

        <input type="text" hidden defaultValue={id} name="id" />
      </div>
      <div className="flex gap-2 items-center self-end">
        <Button type="secondery" onClick={onClose}>
          Back
        </Button>
        <Button submit={true}>{method === "post" ? "Create" : "Edit"}</Button>
      </div>
    </form>
  );
}
export default GroupForm;
