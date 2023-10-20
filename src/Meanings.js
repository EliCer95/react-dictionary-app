import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>
        <em>{props.meanings.partOfSpeech}</em>
      </h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
