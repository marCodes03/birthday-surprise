import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoveMe.css";
import "../App.css";

export default function Surprise() {
  const [hateClicks, setHateClicks] = useState(0);
  const [hideHate, setHideHate] = useState(false);
  const [loveText, setLoveText] = useState("Yes, you do!");
  const navigate = useNavigate();

  const handleHateClick = () => {
    const button = document.querySelector(".hate-button");
    if (button) {
      const x = Math.floor(Math.random() * 1500 - 800); // move left/right up to ±100px
      const y = Math.floor(Math.random() * 500 - 250); // move up/down up to ±50px
      button.style.transform = `translate(${x}px, ${y}px)`;
    }

    setHateClicks((prev) => {
      const next = prev + 1;
      if (next === 1) alert("Aww, that's not very nice! But I know you do. 😊");
      else if (next === 2)
        alert(
          "Are you sure? Think about all the wonderful moments we've shared!"
        );
      else if (next >= 7) {
        alert("Please say yes! You mean the world to me.");
        setHideHate(true);
        setLoveText("YES! YES! YES! you love you me PERIOD!!!");
      }
      return next;
    });
  };

  const handleLoveClick = () => {
    alert("I love you more than words can express!");
    navigate("/gifts");
  };

  return (
    <div className="surprise-page">
      <div className="surprise-content">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWFiZnc1MGVpZTJuOWFjcTIza2MyZnQxdjBqZW5nZDZ1dXM4Z3Z6ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c5btquHAsI3927BM0B/giphy.gif"
          alt="Surprise Gif"
          className="surprise-gif"
        />
        <h1>Do you love me?</h1>
        <div className="button-group">
          <button className="love-button" onClick={handleLoveClick}>
            {loveText}
          </button>
          {!hideHate && (
            <button className="hate-button" onClick={handleHateClick}>
              No, I don't.
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
