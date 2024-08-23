import React from "react";

import { Cards } from "./Cards/Cards";
import styles from "./Home.module.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { Predet } from "./Predet/Predet";

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
          <Searchbar
            arrayCities={arrayCities}
            setarrayCities={setarrayCities}
          />
        </div>
        <div className={styles.predet}>
          <Predet cityPred={cityPred} />
        </div>
      </div>
      <div className={styles.continf}>
        <Cards
          arrayCities={arrayCities}
          setarrayCities={setarrayCities}
          setcityPred={setcityPred}
        />
      </div>
    </div>
  );
};
