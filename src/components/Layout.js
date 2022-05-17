import { Outlet, Link } from "react-router-dom";
import "./List.css";
const Layout = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allTodo">All todo list</Link>
          </li>
        </ul>

      <Outlet />
    </>
  )
};

export default Layout;