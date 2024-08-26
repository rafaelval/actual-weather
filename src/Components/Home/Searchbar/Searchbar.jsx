import React, { useState } from "react";
import { getCityByName } from "../../../request/request";
import styles from "./Searchbar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { strings } from "../../../helpers/strings";

export const Searchbar = ({ arrayCities, setarrayCities }) => {
  const [inputCity, setinputCity] = useState("");

  async function search(e) {
    e.preventDefault();
    const city = await getCityByName(inputCity);
    if(city){
      const arrayFilter = arrayCities.filter((el) => el.name === city.name);
    if (arrayFilter.length === 0) {
      setarrayCities([...arrayCities, city]);
    } else {
      alert(`La ciudad ${city.name} ya esta en la lista`);
    }
    } else {
      alert("la ciudad no existe")
    }
    
    setinputCity("");
  }

  function handleChange(e) {
    setinputCity(e.target.value);
  }

  return (
    <div className={styles.contPrinc}>
      <span className={styles.title}>{strings.searchByCity}</span>
      <form onSubmit={search}>
        <input type="text" onChange={handleChange} value={inputCity} placeholder="Ingrese la ciudad"/>
        <button type="submit"><FontAwesomeIcon className={styles.icon} icon={faSearch}/></button>
      </form>
    </div>
  );
};
