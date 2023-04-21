import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

type Synonym = {
  word: string;
  score: number;
};

const BASE_URL = "https://api.datamuse.com";

function App() {
  const [word, setWord] = useState("");
  const [previousWord, setPreviousWord] = useState("");
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPreviousWord(word);
    fetch(`${BASE_URL}/words?rel_syn=${word}&max=10`)
      .then((response) => response.json())
      .then(setSynonyms);

    setWord("");
  };

  return (
    <div className="App">
      <h1>Synonym Finder</h1>
      <form onSubmit={handleFormSubmit}>
        <input id="word-input" onChange={(e) => setWord(e.target.value)} value={word} placeholder="Search for any word"></input>
        <Button>Submit</Button>
      </form>
      <h2>{previousWord}</h2>
      <ul>
        {synonyms.map((synonym) => (
          <li key={synonym.word}>{synonym.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
