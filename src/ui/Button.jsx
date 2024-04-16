import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function Button({
  to,
  type = "primary",
  children,
  bigSize = false,
  onClick,
  submit = false,
}) {
  const commonStyle =
    "flex items-center justify-center rounded-md transition duration-75 h-9 font-semibold ";
  const style = {
    primary:
      commonStyle +
      "text-white text-lg hover:bg-lynch-600 active:bg-lynch-700 bg-lynch-500 ",
    secondery:
      commonStyle +
      "text-lg border-[2px] bg-white border-lynch-500 hover:border-lynch-600 active:border-lynch-700 text-lynch-500 hover:text-lynch-600 active:text-lynch-700",
  };

  if (to)
    return (
      <Link to={to} className={`${style[type]} ${bigSize ? "w-36" : "w-24"}`}>
        {children}
      </Link>
    );

  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={`${style[type]} ${bigSize ? "w-36" : "w-24"}`}
    >
      {children}
    </button>
  );
}
export default Button;
