import React, { useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman";

function App(props) {
  const wordClues = [
    { PINEAPPLE: "Kind of fruit" },
    { ETHIOPIA: "Country in Africa" },
    { "UNDER THE VOLCANO": "Novel by Malcolm Lowry" },
    { HANNIBAL: "Carthaginian Commander who dazzled history with elephants" },
    { RUMI: "Sufi Poet" },
    { "PENNY FARTHING": "Type of old bike" },
    { "CASSIUS CLAY": "Former name of boxing legend" },
    { PAGANINI: "The devil's fiddler" },
    { VENUS: "Female astral body" }
  ];

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [guesses, setGuesses] = useState(0);
  const [selected, setSelected] = useState([]);
  const [random, setRandom] = useState(0);
  const [game, setGame] = useState("start");
  const [winner, setWinner] = useState(false);

  if (game !== "playing") {
    setRandom(Math.floor(Math.random() * (wordClues.length - 1)) + 1);
    setGame("playing");
  }

  let word = Object.keys(wordClues[random])[0];
  let clue = Object.values(wordClues[random])[0];

  let wordArr = word.split("");

  let toggleBlanks = wordArr.map(letter =>
    selected.indexOf(letter) !== -1 ? (
      letter
    ) : letter === " " ? (
      <span>&nbsp;&nbsp;&nbsp;</span>
    ) : (
      "_ "
    )
  );

  const letterPress = e => {
    setSelected([...selected, e.target.id]);
    console.log(selected);
    if (wordArr.indexOf(e.target.id) === -1) {
      setGuesses(guesses + 1);
    }
    if (toggleBlanks.indexOf("_ ") === -1 && guesses < 7) {
      setWinner(true);
    }
  };

  return (
    <div className='app'>
      <div className='top'>
        <h1>Hangman</h1>
      </div>
      <div className='clue'>
        <h2>-- {clue} --</h2>
      </div>
      <div className='hangman'>
        <Hangman guesses={guesses} winner={winner} />
      </div>
      <div className='blanks'>
        <h2>{guesses < 7 ? toggleBlanks : "You Lose!"}</h2>
      </div>
      <div className='bottom'>
        <div className='input'>
          <h1>
            {alphabet
              .filter(letter => selected.indexOf(letter) === -1)
              .map((item, i) => (
                <button
                  key={i}
                  className='letter-btn'
                  id={item}
                  onClick={letterPress}
                  date={Date()}
                >
                  {item}
                </button>
              ))}
          </h1>
        </div>
        <div className='message'>
          <h3>
            {toggleBlanks.indexOf("_ ") === -1 && guesses < 7 ? "Winner!" : ""}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
