import React from "react";
import { Card } from "./Card/Card";
import styles from "./Cards.module.css";
import { getCityByName } from "../../../request/request";

export const Cards = ({ arrayCities, setarrayCities, setcityPred }) => {
  function delCard(e) {
    const eliminar = arrayCities.filter(
      (el) => el.id !== parseInt(e.currentTarget.id)
    );
    setarrayCities(eliminar);
  }

  function setPred(e) {
    const predet = arrayCities.filter((el) => el.name === e.target.id);
    setcityPred(predet[0]);
    async function fetchData (){
      const initialCity = await getCityByName(predet[0].name)
      setcityPred(initialCity)
      localStorage.setItem('initialCity',JSON.stringify(initialCity))
    }
    fetchData()
  }


  return (
    <div className={styles.cardscont}>
      {arrayCities.map((el, i) => {
        return (
          <Card
            key={i}
            country={el.sys.country}
            name={el.name}
            image={el.weather[0].icon}
            temp={el.main.temp}
            delCard={delCard}
            idcard={el.id}
            setPred={setPred}
            description={el.weather[0].description}
          />
        );
      })}
    </div>
  );
};
