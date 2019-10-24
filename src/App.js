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
  const [game, setGame] = useState("inactive");
  const [guessed, setGuessed] = useState(false);

  if (game !== "active") {
    setRandom(Math.floor(Math.random() * (wordClues.length - 1)) + 1);
    setGame("active");
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
    if (wordArr.indexOf(e.target.id) === -1) {
      setGuesses(guesses + 1);
    }
    setGuessed(true);
  };

  return (
    <div className='app'>
      <div className='top'>
        <h1>Hangman</h1>
      </div>
      {toggleBlanks.indexOf("_ ") === -1 && guesses < 7 ? (
        ""
      ) : (
        <div className='clue'>
          <h2>-- {clue} --</h2>
        </div>
      )}
      <div className='message'>
        {toggleBlanks.indexOf("_ ") === -1 && guesses < 7 ? (
          <>
            <img
              className='crown'
              src='https://thumbs.gfycat.com/FreshSlipperyBrocketdeer-size_restricted.gif'
              alt=''
            />
            <h1>Winner!</h1>
            <br />
            <button
              className='win-btn'
              onClick={() => window.location.reload()}
            >
              <p>PLAY AGAIN?</p>
            </button>
          </>
        ) : (
          ""
        )}
      </div>

      {toggleBlanks.indexOf("_ ") === -1 && guesses < 7 ? (
        ""
      ) : (
        <>
          <div className='hangman'>
            <Hangman guesses={guesses} guessed={guessed} />
          </div>
          <div className='blanks'>
            <h2>{guesses < 7 ? toggleBlanks : "You Lose!"}</h2>
          </div>
          <div className='bottom'>
            <div className='input'>
              <h2>
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
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
