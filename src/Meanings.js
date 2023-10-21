import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

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
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <em>{definition.example}</em>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
