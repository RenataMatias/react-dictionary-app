import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
