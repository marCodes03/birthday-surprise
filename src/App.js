import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Surprise from "./pages/LoveMe";
import Gifts from "./pages/Gift";
import Photos from "./pages/Photos";
import Poems from "./pages/Poems";
import Letter from "./pages/Letter";
import Flowers from "./pages/Flowers";
import StuffToy from "./pages/StuffToy";
import Secret from "./pages/Secret";
import "./styles/Surprise.css";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="birthday-card">
        <h1>Happy Birthday, My love!</h1>

        <div className="message">
          <p>
            My dearest love, on your special day, I wanted to do something a
            little different.
          </p>
          <p>
            This is just a small space on the internet to celebrate you and how
            amazing you are.
          </p>
        </div>

        <button
          className="surprise-button"
          onClick={() => navigate("/love-me")}
        >
          Click me for a surprise!
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love-me" element={<Surprise />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/stufftoy" element={<StuffToy />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}
