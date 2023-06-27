import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { Provider } from "react-redux";
import store from "./store";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

//routing
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddAdmin from "./pages/AddAdmin";
import AddMovie from "./pages/AddMovie";
import GenrePage from "./pages/GenrePage.jsx";
import AddGenre from "./pages/AddGenre.jsx";
import EditGenre from "./pages/EditGenre.jsx";
import EditMovie from "./pages/EditMovie.jsx";
const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/newAdmin",
        element: <AddAdmin />,
      },
      {
        path: "/newMovie",
        element: <AddMovie />,
      },
      {
        path: "/genre",
        element: <GenrePage />,
      },
      {
        path: "/newGenre",
        element: <AddGenre />,
      },
      {
        path: "/editGenre/:id",
        element: <EditGenre />,
      },
      {
        path: "/editMovie/:id",
        element: <EditMovie />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
