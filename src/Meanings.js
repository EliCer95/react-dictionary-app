import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>
          <em>{props.meanings.partOfSpeech}</em>
        </h3>

        <Synonyms synonyms={props.meanings.synonyms} />
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
                <br />
                <strong>Example:</strong>
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
