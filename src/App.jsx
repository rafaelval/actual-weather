import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";

export const App = () => {
  const [arrayCities, setarrayCities] = useState([]);
  const [cityPred, setcityPred] = useState(null);
  console.log(cityPred);

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
