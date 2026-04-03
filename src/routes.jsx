import { lazy, Suspense } from "react";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import NotFound from "./pages/NotFound.jsx";
import Loading from "./components/status/Loading.jsx";
const Gallery = lazy(() => import("./pages/gallery/Gallery.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "photos",
        element: (
          <Suspense fallback={<Loading />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
