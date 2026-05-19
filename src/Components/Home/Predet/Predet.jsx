import React, { memo } from "react";
import styles from "./Predet.module.css";

export const Predet = memo(({ cityPred }) => {
  return (
    <div className={styles.contPrinc}>
      {cityPred && (
        <div className={styles.card}>

          <div className={styles.header}>
            <div className={styles.ciudad}>
              <span>{cityPred.sys.country}</span>
              <h1>{cityPred.name}</h1>
            </div>
            <div className={styles.image}>
              <img
                src={`http://openweathermap.org/img/wn/${cityPred.weather[0].icon}@2x.png`}
                alt="weather icon"
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.contTemp}>
            <span className={styles.temp}>
              {`${parseInt(cityPred.main.temp)}°C`}
            </span>
            <div className={styles.minMax}>
              <span className={styles.description}>
                {cityPred.weather[0].description}
              </span>
              <span>{`${parseInt(cityPred.main.temp_max)}°C max`}</span>
              <span>{`${parseInt(cityPred.main.temp_min)}°C min`}</span>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.detail}>
              <span>Viento</span>
              <span>{`${parseInt(cityPred.wind.speed)} k/h`}</span>
            </div>
            <div className={styles.detail}>
              <span>Humedad</span>
              <span>{`${parseInt(cityPred.main.humidity)}%`}</span>
            </div>
            <div className={styles.detail}>
              <span>Presión</span>
              <span>{`${parseInt(cityPred.main.pressure)} mb`}</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
});

Predet.displayName = "Predet";