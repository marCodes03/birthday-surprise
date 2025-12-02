import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Poem.css";
import "../App.css";

export default function Poems() {
  const navigate = useNavigate();
  const poems = [
    {
      question: "Ano ang tawag sa pangunahing ideya, tema, o pinag-uusapan sa isang akda, talata, o usapan?",
      choices: ["Paksa", "Pandiwa"],
      correct: "Paksa",
      title: "Paboritong paksa",
      poem: "Ikaw ang paboritong paksa\nMapatula man o pagpinta\nSa dami na beses ay di nagsasawa \nSarili ay di masisi ikaw ay obra maesta "
    },
    {
      question: "Ano ang tawag sa pagkilos ng paglapat ng mga labi sa balat ng isang tao,na karaniwang ginagawa bilang pagpapahayag ng pagmamahal, pagbati, o paggalang?",
      choices: ["Halik", "Sampal"],
      correct: "Halik",
      title: "Unang Halik",
      poem: "Click! Tsup! May bulalakaw na dumampi sayong labi\nUnang beses nakakita ng anghel ang sarili\nTotoo pala ang isang tulad mo \nPasalamat ako nakunan ito ng litrato "
    }
    ,
    {
      question: "Anong lugar ang espesyal na itinatag para sa pagbebenta at pag-inom ng kape at iba pang maiinit na inumin?",
      choices: ["Sinihan ", "Kapehan"],
      correct: "Kapehan",
      title: "Kapehan",
      poem: "Unang tagpo sa craft na kapehan \nAko’y na nakilala ng dilag na may kagandahan \nGusto kong habang buhay na kampihan \nGustong dalihin sa dambana at pakasalan"
    },
    {
      question: "Anong pandiwa ang tumutukoy sa gawaing pagpunta sa simbahan o lugar ng pagsamba upang dumalo sa misa, serbisyo, o magdasal?",
      choices: ["Simba ", "Dalaw"],
      correct: "Simba ",
      title: "Simba ",
      poem: "Poong May Kapal pakinggan ang aking dalangin \nAng dilag na sa aking harapan ako’y ibigin \nWala na akong ibang nanaisin \nKundi ang pasaya siya at habang buhay mahalin"
    },
    {
      question: "Anong salita ang tumutukoy sa katangian ng pagiging kamukha, katulad, o may pagkakahawig sa isang bagay o tao?",
      choices: ["Bangis", "Wangis"],
      correct: "Wangis",
      title: "Wangis mo",
      poem: "Sa pag bungad ng isang bagong umaga \nPag nagiisip ang pag ibig wangis mo ang nakikita \nNais na kita agad makasama\nPagkat sa piling mo ay wala nang hihigit pa aking sinta"
    },
    {
      question: "Anong kulay ang karaniwang iniuugnay sa sikat ng araw, kaligayahan, enerhiya?",
      choices: ["Dilaw", "Asul"],
      correct: "Dilaw",
      title: "Dilaw",
      poem: "Ikaw ay kulay ang dilaw pagkat ika’y nakakasilaw\nIkaw liwanag sa mga araw na mapanglaw\nKulay mo ay di pupusyaw \nPagkat ikaw ay litaw na litaw"
    },
    {
      question: "Anong salita ang ginagamit upang ilarawan ang isang bagay o tao na mayroon pa ring pagkakamali, may depekto, hindi kumpleto, o hindi ganap?",
      choices: ["Perpekto", "Imperpekto"],
      correct: "Imperpekto",
      title: "Imperpekto perpekto",
      poem: "“Maging sino ka man ikaw aking tanggap”\nSa harap mo ay di na kailangangang magpanggap\nTapanggap lahat ng aking sikreto at pagkatao\nPagkat ang tahinging nakikita ay ang iniibig ko "
    },
    {
      question: "Anong salita ang tumutukoy sa katangian ng pagiging malapit nang husto, magkakabit, o nakakapit sa isa't isa, na halos walang pagitan?",
      choices: ["Lapit", "Dikit"],
      correct: "Dikit",
      title: "Dikit",
      poem: "Sige ika’y lumapit, sa  init ko’y ika’y dumikit\nIsang shit masarap na masakit\nSige pa at pagsalohan natin ang katawang nag iinit\nPikit ng sa panaginip ito’y maulit "
    },
    {
      question: "Anong salitang Ingles ang ginagamit bilang pantawag o titulo sa isang dalagang walang asawa o sa isang guro (lalo na sa mga bansang Kanluranin)",
      choices: ["Miss", "Mister"],
      correct: "Miss",
      title: "Miss",
      poem: "Grabe ka Miss, pwede pa kiss\nAraw araw pa kiss, pwede ba miss \nGrabe ka magpa miss di ako makatiis\nPagbigyan mo sana sa labing matamis"
    },
    {
      question: "Anong gawain ang tumutukoy sa pagtaya ng pera sa isang laro o pangyayaring may hindi tiyak na kalalabasan?",
      choices: ["Taya", "Sugal"],
      correct: "Sugal",
      title: "Susugal ulit",
      poem: "Hindi ko pa rin tansya ang tamang timpla \nMarahil tayo'y nasa simula kaya ako'y nangangapa\nNatatakot ako'y magkulang o sumonbra\nPagkat baka ako'y maiwang mag-isa\nHay nako huwag naman sana"
    }
  ];

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = poems[index];

  const handleChoice = (choice) => {
    if (choice === current.correct) {
      setCorrect(true);
    } else {
      alert("Try again.");
    }
  };

  const nextPoem = () => {
    const next = index + 1;
    if (next >= poems.length) {
      setFinished(true);
    } else {
      setIndex(next);
      setCorrect(false);
    }
  };

  return (
    

    <div className="gift-page">
      <button className="back-button" onClick={() => navigate("/gifts")}>
            Back to Gifts
          </button>

      {!finished && (
        <div className="poem-quiz">
          <h1>Ako'y tutula Quiz <br></br>({index + 1} / 10)</h1>
          {!correct && (
            <>
              <p>{current.question}</p>
              <div className="quiz-options">
                {current.choices.map((choice) => (
                  <button
                    key={choice}
                    onClick={() => handleChoice(choice)}
                    className="quiz-btn"
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </>
          )}

          {correct && (
            <div className="poem-display">
              <h2>{current.title}</h2>
              <pre>{current.poem}</pre>
              <button className="next-btn" onClick={nextPoem}>
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="all-poems">
          <h1>All Poems</h1>

          <div className="poem-grid">
            {poems.map((p, i) => (
              <div className="poem-card" key={i}>
                <div className="poem-title">{p.title}</div>
                <div className="poem-text">{p.poem}</div>
              </div>
            ))}
          </div>

        </div>
        
      )}

    </div>
  );
}

