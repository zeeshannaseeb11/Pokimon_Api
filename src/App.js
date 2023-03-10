import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourite from "./Pages/Favourite";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },
    { path: "/favourite", element: <Favourite /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
