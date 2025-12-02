import { useState } from "react";
import { useNavigate } from "react-router-dom";
import flower_pic from '../asset/flower-pic.jpg';
import "../styles/Flower.css";
import "../App.css";

export default function Flowers() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flowers-wrap">
      <button className="back-button" onClick={() => navigate("/gifts")}>
            Back to Gifts
          </button>
      <h1 >Flowers</h1>

      <div className="zip-container">
        <div className={`zip-left ${open ? "open" : ""}`}></div>
        <div className={`zip-right ${open ? "open" : ""}`}></div>

        <img
          src= {flower_pic}
          className="zip-image"
          alt="flower"
          draggable="false"
        />

        {!open && (
          <button className="zip-handle" onClick={() => setOpen(true)}>
            Pull
          </button>
        )}
      </div>
    </div>
  );
}
