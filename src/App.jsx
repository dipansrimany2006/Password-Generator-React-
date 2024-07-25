import { useState, useCallback, useEffect } from "react";
import "./scss/App.scss";
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {

    //declarations
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTXYZabcdefghijklmnopqrstxyz";
    
    if (number) {
      str += "0123456789";
    }

    if (character) {
      str += "!@#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      let charposition = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(charposition);
    }

    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator]);

  return (
    <div className="mainContainer">
      <div className="passwordContainer">
        <div className="heading">Password Generator</div>
        <div className="inputField">
          <input
            type="text"
            value={password}
            readOnly
            className="passwordShow"
          />
          <button>Copy</button>
        </div>
        <div className="choosingArea">
          <div className="length">
            <input
              type="range"
              min={6}
              max={12}
              value={length}
              className="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="number">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={()=>{setNumber((prev) => !prev)}}
            />
            <label>Number</label>
          </div>

          <div className="character">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={()=>{setCharacter((prev) => !prev)}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
