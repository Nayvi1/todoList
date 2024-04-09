import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import IsMobile from "../../utils/components/IsMobile";
import { useSelector } from "react-redux";
import { getGroupById } from "../group/groupSlice";

import Todos from "./Todos";
import Modal from "../../ui/Modal";
import CreateTodo from "./CreateTodo";
import { useState } from "react";

function TodoPage() {
  const { todo: todoId } = useParams();
  const group = useSelector((state) => getGroupById(state, todoId));

  const [open, setOpen] = useState({
    createTodo: false,
  });

  function handleClick() {
    setOpen((prev) => {
      return { ...prev, createTodo: true };
    });
  }

  function handleClose() {
    setOpen({ createTodo: false });
  }

  return (
    <main className="max-w-[1360px] mx-auto sm:p-10 p-7">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-lynch-900">{group.name}</h1>
        <div className="flex gap-3">
          {/* <img src="/svg/edit.svg" className="w-10 cursor-pointer" alt="" /> */}
          <IsMobile
            nonMobile={
              <>
                <Button to="/groups" type="secondery">
                  Back
                </Button>
                <Button onClick={handleClick}>New</Button>
              </>
            }
          />
        </div>
      </div>
      <Todos />
      <Modal
        show={open.createTodo}
        onClose={handleClose}
        modalName="Add new Todo"
      >
        <CreateTodo onClose={handleClose} />
      </Modal>
    </main>
  );
}
export default TodoPage;
