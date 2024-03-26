import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import IsMobile from "../../utils/components/IsMobile";
import { useSelector } from "react-redux";
import { getGroupById } from "../group/groupSlice";
import Todo from "./Todo";

function TodoPage() {
  const { todo: todoId } = useParams();
  const group = useSelector((state) => getGroupById(state, todoId));

  return (
    <main className="max-w-[1360px] mx-auto sm:p-10 p-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-lynch-900">{group.name}</h1>
        <div className="flex gap-3">
          <img src="/svg/edit.svg" className="w-10 cursor-pointer" alt="" />
          <IsMobile
            nonMobile={
              <>
                <Button to="/groups" type="secondery">
                  Back
                </Button>
                <Button>New</Button>
              </>
            }
          />
        </div>
      </div>
      <div className="flex sm:flex-wrap gap-5 mt-5 flex-col sm:flex-row">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </main>
  );
}
export default TodoPage;
