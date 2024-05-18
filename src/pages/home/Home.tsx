import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./home.scss";
import Header from "./components/Header";

export default function Home() {
  const navigate = useNavigate();
  const [logined, setLogined] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("logined")) {
      setLogined(true);
    } else {
      navigate("/authen");
    }
  }, []);
  return (
    <div className="home_page">
      {logined && (
        <>
         
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}
