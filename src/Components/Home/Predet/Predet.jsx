import React from "react";
import styles from "./Predet.module.css";

export const Predet = ({ cityPred }) => {
  return (
    <div className={styles.card}>
      {cityPred && (
        <div>
          <div className={styles.header}>
            <div className={styles.ciudad}>
              <span>{cityPred.sys.country}</span>
              <h1>{cityPred.name}</h1>
            </div>
            <div className={styles.image}>
              <img
                src={`http://openweathermap.org/img/wn/${cityPred.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          </div>
          <span>{`Temperatura actual: ${parseInt(
            cityPred.main.temp
          )} °C`}</span>
          <span>{`Max: ${parseInt(cityPred.main.temp_max)} °C`}</span>
          <span>{`Min: ${parseInt(cityPred.main.temp_min)} °C`}</span>
          <div className={styles.button}>
            <button>Detalle</button>
          </div>
        </div>
      )}
    </div>
  );
};
