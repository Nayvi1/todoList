/* eslint-disable react/prop-types */
function Input({ name = "", defaultValue = "" }) {
  return (
    <label className="flex flex-col [&_input]:h-10 [&_input]:outline-none [&_input]:rounded-md [&_input]:bg-slate-200 [&_input]:border [&_input]:border-lynch-300 [&_input]:px-3">
      <span>{name}</span>
      <input defaultValue={defaultValue} required type="text" name={name} />
    </label>
  );
}
export default Input;
