import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";

// Create a layout that includes Header + Outlet
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // Header wrapped around routes
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
