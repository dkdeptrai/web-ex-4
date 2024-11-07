import PropTypes from "prop-types";
import { useState } from "react";

const Modal = ({ onClose, onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    onAddTodo({
      id: Math.floor(Math.random() * 1000),
      todo: inputValue,
      completed: false,
      userId: 5,
    });
  };
  return (
    <>
      <div className="fixed z-50 top-0 left-0 w-full h-full bg-primary bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-bold">Add new todo</h2>
          <input
            type="text"
            placeholder="Enter todo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="bg-accent p-2" onClick={handleAddClick}>
            Add Todo
          </button>
          <button className="bg-danger p-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default Modal;
