import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/routers/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => ({ message: "Hello Data Router!" }),
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

