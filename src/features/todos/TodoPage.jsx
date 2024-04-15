import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import IsMobile from "../../utils/components/IsMobile";
import { useDispatch, useSelector } from "react-redux";
import { getGroupById } from "../group/groupSlice";

import Todos from "./Todos";
import Modal from "../../ui/Modal";
import CreateTodo from "./CreateTodo";
import { useEffect, useState } from "react";
import { createTodos } from "./todoSlice";

function TodoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { todo: todosId } = useParams();
  const group = useSelector((state) => getGroupById(state, todosId));

  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(createTodos(todosId));
    setIsLoading(false);
  }, [dispatch, todosId]);

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
      {/**
       * TODO:
       * be able to edit it
       */}
      {!isLoading && <Todos todosId={todosId} />}
      <Modal
        show={open.createTodo}
        onClose={handleClose}
        modalName="Add new Todo"
      >
        <CreateTodo onClose={handleClose} id={todosId} />
      </Modal>
    </main>
  );
}
export default TodoPage;
