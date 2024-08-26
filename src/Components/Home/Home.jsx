import React from "react";

import { Cards } from "./Cards/Cards";
import styles from "./Home.module.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { Predet } from "./Predet/Predet";
import { Clock } from "../Clock/Clock";

export const Home = ({
  arrayCities,
  setarrayCities,
  cityPred,
  setcityPred,
}) => {
  return (
    <div className={styles.contprinc}>
      <div className={styles.contsup}>
        <div className={styles.search}>
          <div className={styles.clock}>
          <Clock />
          </div>
          <Searchbar
            arrayCities={arrayCities}
            setarrayCities={setarrayCities}
          />
        </div>
        <div className={styles.predet}>
          <Predet cityPred={cityPred} />
        </div>
      </div>
      <hr />
      <div className={styles.continf}>
        <Cards
          arrayCities={arrayCities}
          setarrayCities={setarrayCities}
          setcityPred={setcityPred}
          cityPred={cityPred}
        />
      </div>
    </div>
  );
};
