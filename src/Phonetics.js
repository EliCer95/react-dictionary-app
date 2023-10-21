import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>{" "}
      <span className="phonetic">{props.phonetic.text}</span>
    </span>
  );
}
