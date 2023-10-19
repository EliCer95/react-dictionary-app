import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    setLoaded(true);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form
          className="mt-4 mb-4 d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <input type="search" onChange={handleChange} />
          <input
            type="submit"
            value="search"
            className="btn btn-primary ms-4"
          />
        </form>
        <h1>{result.word}</h1>
        <h2>/ˈ{result.phonetic}/</h2>
        <h3>Synonyms</h3>
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <form
          className="mt-4 mb-4 d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <input type="search" onChange={handleChange} />
          <input
            type="submit"
            value="search"
            className="btn btn-primary ms-4"
          />
        </form>
      </div>
    );
  }
}
