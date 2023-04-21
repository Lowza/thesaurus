import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [word, setWord] = useState("");

  return (
    <div className="App">
      <form>
        <input id="word-input" onChange={(e) => setWord(e.target.value)} value={word} placeholder="Search for any word"></input>
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default App;
