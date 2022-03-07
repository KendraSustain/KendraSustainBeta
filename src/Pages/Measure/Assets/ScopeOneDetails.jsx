import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MTable } from "../../../Components";
import style from "./index.module.css";
import Data from "./NIUK_data.json";
export default function ScopeOneDetails() {
  const location = useLocation();
  const [item, setItem] = useState(0);
  useEffect(() => {
    if (location.state && location.state.detail) setItem(location.state.detail);
    console.log(location.state)
  }, [location]);

  const cardDetails = [
    "Vehicle Reg",
    "Vehicle Reg Driver",
    "Litres",
    "Odometer",
    "Distance Traveled",
    "Transaction Date Time",
    "Location",
    "Net",
    "VAT",
    "Expense",
    "Price / Litre",
    "CO2 Emission",
  ];

  return (
    <div>
      <div className={style.container}>
        {cardDetails.map((d) => (
          <div className={style.card}>
            <span>{d}</span>
            <p>{Data[item][d]}</p>
          </div>
        ))}
      </div>
      {/* <MTable /> */}
    </div>
  );
}
