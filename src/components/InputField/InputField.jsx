import { useState } from "react";
import "./InputField.css";

const InputField = ({ list, setList }) => {
  const [isFocued, setIsFocued] = useState(false);
  const [inputValue, setInputValue] = useState("");

  /* Create function to add todo */
  const addTodo = () => {
    if (inputValue) {
      let uniqueId = Date.now(); // Generate unique id
      setList([...list, { id: uniqueId, title: inputValue, status: "active" }]); // update list with todo
    }
    setInputValue(""); // Empty input value
  };

  /* Create function to handle focus */
  const handleFocus = () => {
    setIsFocued(true);
  };

  /* Create function to handle blur */
  const handleBlur = () => {
    addTodo();
    setIsFocued(false);
  };
  
  /* Create function to handle Keyup when user presses "Enter" */
  const handleKeyup = (e) => {
    // console.log(e); // debug
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className={isFocued ? "input-field focused" : "input-field"}>
      <span className="icon"></span>
      <input
        type="text"
        name="todo"
        data-placeholder="Create a new todo..."
        placeholder={!isFocued ? "Create a new todo..." : ""}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleKeyup}
        autoComplete="off"
      />
    </div>
  );
};

export default InputField;
