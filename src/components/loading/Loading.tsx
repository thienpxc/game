import "./loading.scss";
import Icon from "./ngoisao.jpg";
import React from "react";
export default function Loading() {
  return (
    <div className="loading_container">
      <img className="rotating-image" src={Icon} />
    </div>
  );
}
