import Button from "../../ui/Button";
import CategoryButton from "../../ui/CategoryButton";
import Groups from "./Group";
import IsMobile from "../../utils/components/IsMobile";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { getCategories, getGroup } from "./groupSlice";

import GroupForm from "./GroupForm";
import Modal from "../../ui/Modal";
import GroupDelete from "./GroupDelete";

function GroupMenu() {
  const [open, setOpen] = useState({
    create: false,
    edit: false,
    delete: false,
  });
  const [id, setId] = useState("");
  const [categoryText, setCategoryText] = useState("All");

  const group = useSelector((state) => getGroup(state, categoryText));
  const categories = useSelector(getCategories);

  useEffect(() => {
    if (!group.length) {
      setCategoryText("All");
    }
  }, [group.length]);

  function handleClick() {
    setOpen((state) => {
      return { ...state, create: true };
    });
  }

  function handleClose() {
    setOpen((state) => {
      return { ...state, create: false, edit: false, delete: false };
    });
  }
  function handleEdit(id) {
    setId(id);
    setOpen((state) => {
      return { ...state, edit: true };
    });
  }

  function handleDelete(id) {
    setId(id);
    setOpen((state) => {
      return { ...state, delete: true };
    });
  }

  function handleCategoryBtnClick(category) {
    setCategoryText(category);
  }

  return (
    <main className="max-w-[1360px] mx-auto sm:px-10 sm:pb-10 px-7">
      <div className="flex justify-between items-center sticky py-7 top-0 bg-white">
        <div className="flex gap-4 flex-wrap">
          {categories.length > 0 && (
            <CategoryButton
              onClick={() => handleCategoryBtnClick("all")}
              active={categoryText.toLowerCase() === "all"}
            >
              All
            </CategoryButton>
          )}

          {categories.map((category) => {
            return (
              <CategoryButton
                key={category}
                onClick={() => handleCategoryBtnClick(category)}
                active={category === categoryText.toLowerCase()}
              >
                {category}
              </CategoryButton>
            );
          })}
        </div>
        <div className="flex gap-5">
          <IsMobile
            nonMobile={
              <>
                <Button to="/" type="secondery">
                  Back
                </Button>
                <Button onClick={handleClick}>New</Button>
              </>
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 h-full ">
        {group.length > 0
          ? group.map((group) => {
              return (
                <Groups
                  onEdit={handleEdit}
                  key={group.id}
                  categoryName={group.category}
                  groupName={group.name}
                  id={group.id}
                  onDelete={handleDelete}
                />
              );
            })
          : "No Groups, Start By Adding"}
      </div>
      <IsMobile
        mobile={
          <div className="flex justify-between sticky bottom-0 py-7 bg-white">
            <Button to="/" bigSize type="secondery">
              Back
            </Button>
            <Button bigSize onClick={handleClick}>
              New
            </Button>
          </div>
        }
      />
      <Modal
        show={open.create}
        onClose={handleClose}
        modalName="Create New Group"
      >
        <GroupForm method="post" onClose={handleClose} />
      </Modal>

      <Modal modalName="Edit Group" show={open.edit} onClose={handleClose}>
        <GroupForm method="patch" id={id} onClose={handleClose} />
      </Modal>

      <Modal
        show={open.delete}
        onClose={handleClose}
        method="delete"
        modalName="Delete Group"
      >
        <GroupDelete method="delete" onClose={handleClose} id={id} />
      </Modal>
    </main>
  );
}
export default GroupMenu;
