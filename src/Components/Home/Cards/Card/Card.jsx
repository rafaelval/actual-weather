import React from "react";
import styles from "./Card.module.css";

export const Card = ({
  delCard,
  idcard,
  pais,
  nombre,
  image,
  temp,
  max,
  min,
  setPred,
}) => {
  return (
    <div className={styles.card}>
      <span className={styles.close} onClick={delCard} id={idcard}>
        X
      </span>
      <div className={styles.header}>
        <div className={styles.ciudad}>
          <span>{pais}</span>
          <h1>{nombre}</h1>
        </div>
        <div className={styles.image}>
          <img
            src={`http://openweathermap.org/img/wn/${image}@2x.png`}
            alt=""
          />
        </div>
      </div>
      <span>{`Temperatura actual: ${parseInt(temp)} °C`}</span>
      <span>{`Max: ${parseInt(max)} °C`}</span>
      <span>{`Min: ${parseInt(min)} °C`}</span>
      <div className={styles.buttons}>
        <button>Detalle</button>
        <button id={nombre} onClick={setPred}>
          Predet
        </button>
      </div>
    </div>
  );
};
