import { useNavigate } from "react-router-dom";
import "../styles/Gift.css";
import "../App.css";


export default function Gifts() {
  const navigate = useNavigate();

  return (
    <div className="gifts-page">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Surprise
      </button>
      <h1>Your Gifts</h1>
      <p>
        Since you already know about and received some of these gifts, why not
        open those first? <br></br> Then, move on to the ones you don't know
        about. Remember to save the secret one for last!
      </p>
      <div className="gifts-buttons">
        <button className="gift-btn" onClick={() => navigate("/photos")}>
          <div className="number">1</div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanhlZmpkeGt2bnFyNDMzazNzcjhsdGh0aDNramJ3enE4MGt3am03eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JVqgyIS1kww5utQflo/giphy.gif"
            alt=""
          />
          <span></span>
        </button>

        <button className="gift-btn" onClick={() => navigate("/flowers")}>
          <div className="number">2</div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25vYXpybDFhcDBkbnFkbDlmdWVoM2EzNGxrYng0MndhNHFqYm83YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Hl1vQAZ8tG86GVKCpb/giphy.gif"
            alt=""
          />
          <span></span>
        </button>

        <button className="gift-btn" onClick={() => navigate("/stufftoy")}>
          <div className="number">3</div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2ZtYWVsb21mZngxM29yZW1idWpmNnp3dWhhdG5saGVmNm15aXkydiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TZ539qBmtzNFFgAwly/giphy.gif"
            alt=""
          />
          <span></span>
        </button>

        <button className="gift-btn" onClick={() => navigate("/poems")}>
          <div className="number">4</div>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVxMWU5dTNiaWw2dXZybnk1cG5rdHB1NnJpOTRpMzJyYnJ2ejdsbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NJHvA2gkvqfUJQlh3j/giphy.gif"
            alt=""
          />
          <span></span>
        </button>

        <button className="gift-btn" onClick={() => navigate("/letter")}>
          <div className="number">5</div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXA2dXZ1cHJjb2hjZng2N2JwNDdjb2l2YTR5YWd2NWx2NHNvOGV3byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ClUoBdGu7i6IGRGVuW/giphy.gif"
            alt=""
          />
          <span></span>
        </button>

        <button className="gift-btn" onClick={() => navigate("/secret")}>
          <div className="number">6</div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFtem4xOGNvMmNrZzMxNjc0MG9ncGg1cXY0emNxcmdwaThjbWY2YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/okRDZEU49WV2dibzLe/giphy.gif"
            alt=""
          />
          <span></span>
        </button>
      </div>
    </div>
  );
}
