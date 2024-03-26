/* eslint-disable react/prop-types */
function Modal({ show = false, modalName = "x", children, onClose }) {
  if (show)
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div
          onClick={onClose}
          className="fixed top-0 left-0 w-screen h-screen bg-slate-700 opacity-70 cursor-pointer"
        ></div>
        <div className="w-[300px] sm:w-[450px]  z-10 absolute rounded-lg">
          <div className="h-[60px] bg-lynch-800 flex items-center justify-between p-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <img src="/svg/modal.svg" className="w-8" alt="" />
              <p className="font-semibold text-xl text-white">{modalName}</p>
            </div>
            <img
              src="/svg/add.svg"
              className="w-8 rotate-45 cursor-pointer"
              alt=""
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </div>
    );

  return "";
}
export default Modal;
