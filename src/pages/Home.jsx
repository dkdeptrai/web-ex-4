const Home = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        Welcome to the Todo App - Demo for SE347.P12
      </h1>
      <p>This is a simple todo app built with React and TailwindCSS</p>
      <p>
        <strong>API Demo: </strong>
        <a
          href="https://dummyjson.com/docs/todos"
          target="_blank"
          className="underline"
        >
          https://dummyjson.com/docs/todos
        </a>
      </p>
    </div>
  );
};

export default Home;
