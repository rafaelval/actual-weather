import React from "react";
import { Card } from "./Card/Card";
import styles from "./Cards.module.css";

export const Cards = ({ arrayCities, setarrayCities, setcityPred }) => {
  function delCard(e) {
    const eliminar = arrayCities.filter(
      (el) => el.id !== parseInt(e.target.id)
    );
    setarrayCities(eliminar);
  }

  function setPred(e) {
    const predet = arrayCities.filter((el) => el.name === e.target.id);
    setcityPred(predet[0]);
  }

  return (
    <div className={styles.cardscont}>
      {arrayCities.map((el, i) => {
        return (
          <Card
            key={i}
            pais={el.sys.country}
            nombre={el.name}
            image={el.weather[0].icon}
            temp={el.main.temp}
            max={el.main.temp_max}
            min={el.main.temp_min}
            delCard={delCard}
            idcard={el.id}
            setPred={setPred}
          />
        );
      })}
    </div>
  );
};
