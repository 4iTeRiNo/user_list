import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/routes/Home";
import { UsersList } from "./components/UserList";
import ErrorPage from "./components/routes/error-page";
import { UserInfo } from "./components/routes/UserInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", index: true, element: <UsersList /> },
      { path: "users/user/:id", element: <UserInfo /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    ></RouterProvider>
  );
}

export default App;

