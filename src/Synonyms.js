import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms list-group list-group-horizontal">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="list-group-item">
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
