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
          <h2>My love, Tsuki, </h2>
          <p>
            Hello po, love love! Advance happy birthday sa 'yo, love. Everyday, I am thankful na dumating ka sa buhay ko, love love. You are the love that is truly unexpected na nasasabi ko lagi sa araw-araw na ang swerte ko na dumating ka sa buhay ko. Kaya ngayon na malapit na 'yung kaarawan mo, I want to make you feel special in the best of my abilities. I promise that I won't change. I will love you and be loyal, be faithful, and always be honest sa 'yo, love love.
          </p>
          <p>
            Love, I wish para sa 'yo, you remain in love sa akin. I wish na bigyan ka ni God ng madami pang blessings kasi sobrang mapagbigay mong tao and sobrang bait ng tao. I wish na next year, love love, ay papasa ka ng CPALE at magiging basic 'yung review mo, love love. And of course, dito lang po ako, kasama mo po ako all throughout your journey. I also wish for your good health, my love, na huwag ka pong magkakasakit at you always stay healthy and glowing.
          </p>
          <p>Advance happy birthday, my love, Tsuki. May all of your heart desires come true, my love. And always remember that I love you so very very much, more than you could ever think of, heart and soul, my love, Miss Christine Joy Amaro.</p>
          <p>Forever and always yours,</p>
          <p>Your Hina</p>
        </div>
      </div>
    </div>
  );
}
