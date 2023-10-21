import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.keyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form
            className="mt-4 mb-2 d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <input type="search" onChange={handleChange} />
          </form>
          <div className="hints">suggested words: sunset, wine, yoga,..</div>
        </section>
        <Results results={result} />
      </div>
    );
  } else {
    load();
  }
  return "Loading..";
}
