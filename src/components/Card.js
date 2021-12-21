import React from 'react';
import './card.styles.css';

function Card(props) {
  const { path, id, handleClick, alreadyClicked } = props;

  if (!alreadyClicked) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        className="card not-clicked"
        href={path}
        onClick={() => handleClick(id)}
      >
        <h2>{id + 1}</h2>
      </a>
    );
  } else {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        className="card clicked"
        href={path}
        onClick={() => handleClick(id)}
      >
        <h2>{id + 1}</h2>
      </a>
    );
  }
}

export default Card;
