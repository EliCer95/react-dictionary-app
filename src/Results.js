import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h4>{props.results.phonetic}</h4>
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
