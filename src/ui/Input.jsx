/* eslint-disable react/prop-types */
function Input({ text = "", defaultValue = "" }) {
  /**
   * TODO:
   * complete the Input components
   * replace it in other components
   */
  return (
    <label>
      <span>{text}</span>
      <input defaultValue={defaultValue} required type="text" name={text} />
    </label>
  );
}
export default Input;
