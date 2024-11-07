import { useEffect } from "react";
import TodoItem from "../components/TodoItem";
import { useState } from "react";
import Modal from "../components/Modal";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTodos = async () => {
    const response = await fetch("https://dummyjson.com/todos/user/198");
    const data = await response.json();
    console.log(data);
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    closeModal();
  };

  return (
    <div>
      <h1>Todo</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Completed</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            console.log(todo);
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onRemove={handleRemove}
              />
            );
          })}
        </tbody>
      </table>

      <button className="bg-accent my-2 p-2" onClick={openModal}>
        Add more todo
      </button>

      {isModalOpen && <Modal onClose={closeModal} onAddTodo={handleAddTodo} />}
    </div>
  );
};

export default Todo;
