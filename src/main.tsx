// React
import React from "react";
import ReactDOM from "react-dom/client";
// React Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
// Components
import Root from "./Root";
// Assets
import "./index.css";
import Index from "./pages/Index";
import { pages } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<Index />} index />
      {pages.flatMap((level) =>
        level.contents.map((page) => (
          <Route
            key={page.name}
            element={page.element}
            path={`${level.root}/${page.link}`}
          />
        ))
      )}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
