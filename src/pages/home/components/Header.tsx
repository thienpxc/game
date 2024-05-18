import React from "react";
import resource from "../../../resources";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="left">
        <div className="user_box">
          <img src={resource.images.Logo} />
          <span>Admin</span>
        </div>
      </div>
      <div className="right">
        <button
          onClick={() => {
            localStorage.removeItem("logined");
            navigate("/authen");
          }}
          className="btn btn-danger"
        >
          logout
        </button>
      </div>
    </header>
  );
}
