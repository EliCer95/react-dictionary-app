import React from "react";

export default function Phonetics(props) {
  return (
    <span>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>{" "}
      {props.phonetic.text}
    </span>
  );
}
