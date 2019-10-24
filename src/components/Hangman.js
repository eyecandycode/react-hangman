import React from "react";

function Hangman(props) {
  if (props.guesses === 0 && !props.guessed) {
    return (
      <div>
        <h3>Get guessing!</h3>
      </div>
    );
  }
  if (props.guesses === 0 && props.guessed) {
    return <></>;
  }
  if (props.guesses === 1) {
    return (
      <img
        className='head'
        src='https://wojwaw.com/wp-content/themes/wojwaw/img/Geba_fazy_small.gif'
        alt=''
      />
    );
  }
  if (props.guesses === 2) {
    return (
      <div>
        <img
          className='head'
          src='https://wojwaw.com/wp-content/themes/wojwaw/img/Geba_fazy_small.gif'
          alt=''
        />
        <br />{" "}
        <img
          className='body'
          src='https://media.giphy.com/media/x2e1C2vIX825i/giphy.gif'
          alt=''
        />
      </div>
    );
  }
  if (props.guesses === 3) {
    return (
      <div>
        <img
          className='head'
          src='https://wojwaw.com/wp-content/themes/wojwaw/img/Geba_fazy_small.gif'
          alt=''
        />
        <br />{" "}
        <span className='torso'>
          <img
            className='body'
            src='https://media.giphy.com/media/x2e1C2vIX825i/giphy.gif'
            alt=''
          />
          <img
            className='right-arm'
            src='https://myrealdomain.com/images/hand-gif.gif'
            alt=''
          />{" "}
        </span>
      </div>
    );
  }
  if (props.guesses === 4) {
    return (
      <div>
        <img
          className='head'
          src='https://wojwaw.com/wp-content/themes/wojwaw/img/Geba_fazy_small.gif'
          alt=''
        />
        <br />{" "}
        <span className='torso'>
          <img
            className='left-arm'
            src='http://kinlawww.com/wp-content/themes/gridz/i/RIGHTARM_short.gif'
            alt=''
          />
          <img
            className='body'
            src='https://media.giphy.com/media/x2e1C2vIX825i/giphy.gif'
            alt=''
          />
          <img
            className='right-arm'
            src='https://myrealdomain.com/images/hand-gif.gif'
            alt=''
          />{" "}
        </span>
      </div>
    );
  }

  if (props.guesses === 5) {
    return (
      <div>
        <img
          className='head'
          src='https://wojwaw.com/wp-content/themes/wojwaw/img/Geba_fazy_small.gif'
          alt=''
        />
        <br />{" "}
        <span className='torso'>
          <img
            className='body'
            className='left-arm'
            src='http://kinlawww.com/wp-content/themes/gridz/i/RIGHTARM_short.gif'
            alt=''
          />
          <img
            className='body'
            src='https://media.giphy.com/media/x2e1C2vIX825i/giphy.gif'
            alt=''
          />
          <img
            className='right-arm'
            src='https://myrealdomain.com/images/hand-gif.gif'
            alt=''
          />{" "}
        </span>
        <span className='legs'>
          {" "}
          <img
            className='left-leg'
            src='https://media3.giphy.com/media/PhI6t5v17cmP0wf8g1/giphy.gif'
            alt=''
          />
          <img className='right-leg' src='' alt='' />
        </span>
      </div>
    );
  }
  if (props.guesses === 6) {
    return (
      <div>
        <img
          className='head'
          src='https://wojwaw.com/wp-content/themes/wojwaw/img/Geba_fazy_small.gif'
          alt=''
        />
        <br />{" "}
        <span className='torso'>
          <img
            className='body'
            className='left-arm'
            src='http://kinlawww.com/wp-content/themes/gridz/i/RIGHTARM_short.gif'
            alt=''
          />
          <img
            className='body'
            src='https://media.giphy.com/media/x2e1C2vIX825i/giphy.gif'
            alt=''
          />
          <img
            className='right-arm'
            src='https://myrealdomain.com/images/hand-gif.gif'
            alt=''
          />{" "}
        </span>
        <span className='legs'>
          {" "}
          <img
            className='left-leg'
            src='https://media3.giphy.com/media/PhI6t5v17cmP0wf8g1/giphy.gif'
            alt=''
          />
          <img
            className='right-leg'
            src='https://media3.giphy.com/media/PhI6t5v17cmP0wf8g1/giphy.gif'
            alt=''
          />
        </span>
      </div>
    );
  }
  if (props.guesses >= 7) {
    return (
      <div>
        <img
          className='skull'
          src='https://thumbs.gfycat.com/CaninePerfectCrocodile-small.gif'
          alt=''
        />
      </div>
    );
  }
}

export default Hangman;
