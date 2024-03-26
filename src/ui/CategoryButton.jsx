/* eslint-disable react/prop-types */
function CategoryButton({ children, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-xl leading-5 sm:text-2xl sm:leading-6 capitalize ${
        active ? "text-lynch-500 border-b border-b-lynch-500" : "text-lynch-300"
      }`}
    >
      {children}
    </button>
  );
}
export default CategoryButton;
