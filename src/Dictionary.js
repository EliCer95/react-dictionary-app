import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (word.length > 0) {
      //documentation: https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      alert("Please, enter a word");
    }
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form
        className="mt-4 mb-4 d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <input type="search" onChange={handleChange} />
        <input type="submit" value="search" className="btn btn-primary ms-4" />
      </form>
      <Results results={result} />
    </div>
  );
}
