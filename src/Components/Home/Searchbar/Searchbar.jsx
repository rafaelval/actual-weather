import React, { useState } from "react";
import { getCityByName } from "../../../request/request";
import styles from "./Searchbar.module.css";

export const Searchbar = ({ arrayCities, setarrayCities }) => {
  const [inputCity, setinputCity] = useState("");

  async function search(e) {
    e.preventDefault();
    const city = await getCityByName(inputCity);
    const arrayFilter = arrayCities.filter((el) => el.name === city.name);
    if (arrayFilter.length === 0) {
      setarrayCities([...arrayCities, city]);
    } else {
      alert(`La ciudad ${city.name} ya esta en la lista`);
    }
    setinputCity("");
  }

  function handleChange(e) {
    setinputCity(e.target.value);
  }

  return (
    <div>
      <span>Búsqueda por ciudad</span>
      <form onSubmit={search}>
        <input type="text" onChange={handleChange} value={inputCity} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};
