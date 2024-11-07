import PropTypes from "prop-types";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <tr>
      <td className="border p-2">{todo.todo}</td>
      <td className="border p-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </td>
      <td className="border p-2">
        <button onClick={() => onRemove(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItem;
