import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { createGroup, editGroup, getGroupById } from "./groupSlice";
import Input from "../../ui/Input";
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-14 ">
      <div className="flex flex-col gap-6">
        <Input
          defaultValue={method === "patch" ? group.name : ""}
          name="name"
        />
        <Input
          defaultValue={method === "patch" ? group.category : ""}
          name="category"
        />

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
