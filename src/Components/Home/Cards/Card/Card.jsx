import React from "react";
import styles from "./Card.module.css";
import { strings } from "../../../../helpers/strings";
import { IoMdCloseCircle } from "react-icons/io";

export const Card = ({
  delCard,
  idcard,
  country,
  name,
  image,
  temp,
  setPred,
  description,
}) => {
  return (
    <div className={styles.card}>
      <IoMdCloseCircle className={styles.close} onClick={delCard} id={idcard}/>
      <div className={styles.header}>
        <div className={styles.ciudad}>
          <span>{country}</span>
          <h1>{name}</h1>
        </div>
        <div className={styles.image}>
          <img
            src={`http://openweathermap.org/img/wn/${image}@2x.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.contTemp}>
        <span className={styles.description}>{description}</span>
        <span className={styles.temp}>{`${parseInt(temp)}°C`}</span>
      </div>
      <div className={styles.buttons}>
        <button id={name} onClick={setPred}>
          {strings.predet}
        </button>
      </div>
    </div>
  );
};
