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

  const fetchSynonyms = (word: string) => {
    fetch(`${BASE_URL}/words?rel_syn=${word}&max=10`)
      .then((response) => response.json())
      .then(setSynonyms);
  };

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSynonyms(word);
    setPreviousWord(word);
    setWord("");
  };

  const handleClickedSynonym = (word: string) => {
    setWord(word);
    setPreviousWord(word);
    fetchSynonyms(word);
  };

  return (
    <div className="App">
      <h1>Synonym Finder</h1>
      <form onSubmit={handleFetchSynonyms}>
        <input id="word-input" onChange={(e) => setWord(e.target.value)} value={word} placeholder="Search for any word"></input>
        <Button>Submit</Button>
      </form>
      <h2>{previousWord}</h2>
      <ul>
        {synonyms.map((synonym) => (
          <li onClick={() => handleClickedSynonym(synonym.word)} key={synonym.word}>
            {synonym.word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
