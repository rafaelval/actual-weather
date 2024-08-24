import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { getCityByName } from "./request/request";

export const App = () => {
  const [arrayCities, setarrayCities] = useState([]);
  const [cityPred, setcityPred] = useState(null);

  useEffect(() => {
    const city = JSON.parse(localStorage.getItem('initialCity'))
    if(!city){
    async function fetchData (){
      const initialCity = await getCityByName("Bello")
      setcityPred(initialCity)
      localStorage.setItem('initialCity',JSON.stringify(initialCity))
    }
      fetchData()
  } else {
    setcityPred(city)
  }
  }, [])
  
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              arrayCities={arrayCities}
              setarrayCities={setarrayCities}
              cityPred={cityPred}
              setcityPred={setcityPred}
            />
          }
        />
        <Route path="/:nombre" />
      </Routes>
    </div>
  );
};
