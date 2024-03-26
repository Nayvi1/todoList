import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteGroup } from "./groupSlice";
/* eslint-disable react/prop-types */
function GroupDelete({ onClose, id }) {
  const disptach = useDispatch();

  function handleDelete() {
    disptach(deleteGroup(id));
    onClose();
  }

  return (
    <div className="bg-white p-6 flex flex-col gap-14 rounded-b-lg">
      <div className="flex flex-col ">
        <p className="text-xl text-lynch-900">
          Are you sure you want to delete the group?
        </p>
        <p className="text-lynch-500">You can&apos;t undo the action</p>
      </div>
      <div className="flex gap-2 items-center self-end">
        <Button type="secondery" onClick={onClose}>
          No
        </Button>
        <Button onClick={handleDelete} submit>
          Yes
        </Button>
      </div>
    </div>
  );
}
export default GroupDelete;
