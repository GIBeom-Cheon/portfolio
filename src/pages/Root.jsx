import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div style={{ background: "black" }}>
      <Suspense fallback={"loading..."}>
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;
