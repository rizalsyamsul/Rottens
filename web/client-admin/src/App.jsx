import { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
