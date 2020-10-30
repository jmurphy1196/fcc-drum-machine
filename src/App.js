import React, { useState, useEffect } from "react";
import { bankOne, bankTwo } from "./util/banks";
import "./App.css";

function App() {
  const [currentBank, setCurrentBank] = useState(1);
  //todo add bank toggle
  useEffect(() => {
    let btns = document.querySelectorAll(".drum-pad");
    btns = Array.from(btns);
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.lastChild.play();
        btn.style.filter = "brightness(70%)";
        setTimeout(() => {
          btn.style.filter = "brightness(100%)";
        }, 100);
      });
    });
    addKeyListeners();
  }, []);
  const soundEvent = (e) => {
    let btns = document.querySelectorAll(".drum-pad");
    btns = Array.from(btns);
    let activeBank = currentBank === 0 ? bankOne : bankTwo;
    activeBank.forEach((bank) => {
      if (e.key === bank.keyTrigger.toLowerCase()) {
        let sound = new Audio(bank.url);
        sound.play();
        btns.forEach((btn) => {
          if (btn.textContent.toLowerCase() === e.key) {
            btn.style.filter = "brightness(70%)";
            setTimeout(() => {
              btn.style.filter = "brightness(100%)";
            }, 100);
          }
        });
      }
    });
  };
  const addKeyListeners = () => {
    document.removeEventListener("keypress", soundEvent);
    document.addEventListener("keypress", soundEvent);
  };
  console.log(currentBank);
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display" className="drum-pad">
          <button className="btn">Q</button>
          <audio
            id="Q"
            className="clip"
            src={currentBank === 0 ? bankOne[0].url : bankTwo[0].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">W</button>
          <audio
            id="W"
            className="clip"
            src={currentBank === 0 ? bankOne[1].url : bankTwo[1].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">E</button>
          <audio
            id="E"
            className="clip"
            src={currentBank === 0 ? bankOne[2].url : bankTwo[2].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">A</button>
          <audio
            id="A"
            className="clip"
            src={currentBank === 0 ? bankOne[3].url : bankTwo[3].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">S</button>
          <audio
            id="S"
            className="clip"
            src={currentBank === 0 ? bankOne[4].url : bankTwo[4].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">D</button>
          <audio
            id="D"
            className="clip"
            src={currentBank === 0 ? bankOne[5].url : bankTwo[5].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">Z</button>
          <audio
            id="Z"
            className="clip"
            src={currentBank === 0 ? bankOne[6].url : bankTwo[6].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">X</button>
          <audio
            id="X"
            className="clip"
            src={currentBank === 0 ? bankOne[7].url : bankTwo[7].url}
          />
        </div>
        <div className="drum-pad">
          <button className="btn">C</button>
          <audio
            id="C"
            className="clip"
            src={currentBank === 0 ? bankOne[8].url : bankTwo[8].url}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
