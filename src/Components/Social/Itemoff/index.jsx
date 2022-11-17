import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function ItemOff({ Name, back, color, link, DeleteDate }) {
  return (
    <div
      className="rede-social border"
      style={{
        backgroundColor: back,
        color: color,
        "borderColor": color
      }}
    >
      <a href={link}>
        <div className="rede-social">{Name || "Algo"}</div>
      </a>
    </div>
  );
}
