import React, { useState } from "react";
import styles from "./cardl.module.css";

const Card = ({ Poster, Title, Type, Year, imdbID }) => {
  const [st, setST] = useState(true);
  const t = () => setST(true);
  const f = () => setST(false);

  return (
    <div className={styles.cardd} onClick={f} onMouseLeave={t} key={imdbID}>
      <div className={styles.imgC}>
        <img src={Poster} alt="hello"></img>
      </div>

      <div className={st ? styles.infoC : styles.infoCC}>
        <p>{Title}</p>
        <p>{Type}</p>
        <p> {Year} </p>
        <p> {imdbID} </p>
      </div>
    </div>
  );
};

export default Card;
