import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [navToggled, setNavToggled] = useState(false);

  const toggleNav = () => {
    setNavToggled((prev) => !prev);
  };
  return (
    <div className="">
      <header className="bg-primary p-1 flex flex-row items-center">
        <button onClick={toggleNav}>
          <img src="../../public/menu.svg" alt="menu" className="fill-accent" />
        </button>
      </header>
      <div className="flex flex-row">
        <nav
          className={`${
            navToggled ? "flex" : "hidden"
          } flex-col items-center justify-center bg-primary h-screen w-1/6`}
        >
          <ul className="text-accent">
            <li className="my-4 ">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">To do</Link>
            </li>
          </ul>
        </nav>

        <div className="flex-1 p-4">
          <Outlet className="bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
