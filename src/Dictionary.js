import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.keyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState("");

  function handlePicturesResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let sheCodesApiKey = "2f2ob3ct1704051a7e5075a8a7ec2a7e";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesApiKey}`;

    axios.get(sheCodesApiUrl).then(handlePicturesResponse);
    axios.get(apiUrl).then(handleResponse);
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
          <h1>Type a word!</h1>
          <form
            className="mt-4 mb-2 d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              onChange={handleChange}
              placeholder={props.keyword}
              autoFocus={true}
              className="form-control search-input"
            />
          </form>
          <div className="hints">suggestions: sunset, wine, yoga,..</div>
        </section>
        <Results results={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
  return "Loading..";
}
