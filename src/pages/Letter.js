import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Letter.css";
import "../App.css";

export default function Letter() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(v => !v);
  };

  return (
    <div className="letter-container">

      <button className="back-button" onClick={() => navigate("/gifts")}>
              Back to Gifts
            </button>
      <div className="letter-stage">

        <h1>Letter</h1>
        <p>Click on the envelope to open and read the letter.</p>
        <div className={`envelope ${opened ? "opened" : ""}`} onClick={handleToggle}>
          <div className={`flap ${opened ? "open" : ""}`}></div>
          <div className="pocket"></div>
        </div>


        <div className={`paper ${opened ? "show" : ""}`} onClick={handleToggle}>
          <h2>My love, Hina, </h2>
          <p>
            Today is special because you are special. I wrote this letter to remind you
            how much you mean to me. Every moment with you is a treasure.
          </p>
        </div>
      </div>
    </div>
  );
}
