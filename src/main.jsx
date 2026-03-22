import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import Projects from "./components/Projects.jsx";
import NotFound from "./components/NotFound.jsx";
import Loading from "./components/loading/Loading.jsx";

const Gallery = lazy(() => import("./components/gallery/Gallery.jsx"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/photography",
        element: (
          <Suspense fallback={<Loading message="Loading gallery..." />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
