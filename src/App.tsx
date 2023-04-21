import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  return (
    <div className="App">
      <form>
        <label htmlFor="word-input">Your word</label>
        <input id="word-input" onChange={(e) => setWord(e.target.value)} value={word}></input>
      </form>
    </div>
  );
}

export default App;
