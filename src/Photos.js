import React from "react";
import "./Photos.css";

export default function Photos(props) {
  //   console.log(props.photos[0].src.landscape);
  if (props.photos) {
    return (
      <section className="photos">
        {props.photos.map(function (photo, index) {
          return <img key={index} src={photo.src.landscape} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
