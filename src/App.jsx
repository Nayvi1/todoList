import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import GroupMenu from "./features/group/GroupMenu";
import TodoPage from "./features/todos/TodoPage";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <GroupMenu />,
    path: "/groups",
  },
  {
    element: <TodoPage />,
    path: "/todos/:todo",
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
