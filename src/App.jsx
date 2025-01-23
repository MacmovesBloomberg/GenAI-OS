import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";

import "./App.css";
import Summarization from "./pages/Summarization";
import Rag from "./pages/Rag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Summarization />,
      },
      {
        path: "/rag",
        element: <Rag />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
