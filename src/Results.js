import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h4>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index} className="pe-4">
                <Phonetics phonetic={phonetic} />
              </span>
            );
          })}
        </h4>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meanings={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
