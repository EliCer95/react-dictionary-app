import React from "react";

export default function Phonetics(props) {
  return (
    <span>
      <a href={props.phonetic.audio} target="_blank" link="nonreferrer">
        Listen
      </a>{" "}
      {props.phonetic.text}
    </span>
  );
}
