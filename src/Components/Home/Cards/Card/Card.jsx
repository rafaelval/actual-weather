import React, { memo, useCallback } from "react";
import styles from "./Card.module.css";
import { strings } from "../../../../helpers/strings";
import { IoMdCloseCircle } from "react-icons/io";

export const Card = memo(({
  delCard,
  idcard,
  country,
  name,
  image,
  temp,
  setPred,
  description,
}) => {
  const handleDelete = useCallback((e) => {
    delCard(e);
  }, [delCard]);

  const handleSetPred = useCallback((e) => {
    setPred(e);
  }, [setPred]);

  return (
    <div className={styles.card}>
      <IoMdCloseCircle className={styles.close} onClick={handleDelete} id={idcard}/>
      <div className={styles.header}>
        <div className={styles.ciudad}>
          <span>{country}</span>
          <h1>{name}</h1>
        </div>
        <div className={styles.image}>
          <img
            src={`http://openweathermap.org/img/wn/${image}@2x.png`}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.contTemp}>
        <span className={styles.description}>{description}</span>
        <span className={styles.temp}>{`${parseInt(temp)}°C`}</span>
      </div>
      <div className={styles.buttons}>
        <button id={name} onClick={handleSetPred}>
          {strings.predet}
        </button>
      </div>
    </div>
  );
});

Card.displayName = "Card";
