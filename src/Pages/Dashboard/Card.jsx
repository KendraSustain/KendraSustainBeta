import React from "react";
import style from "./Card.module.css";
export default function Card() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>Cumulative Emissions - (2020 -21)</span>
          <p>Stearn Electric CO LTD</p>
          <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "25px" }}>51,165 kgCO2/KwH</p>
        </div>
        <div className={style.card}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>Total Scope 1 Emissions - (2020 -21)</span>
          <p>Stearn Electric CO LTD</p>
          <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "25px" }}>14,102 kgCO2/KwH</p>
        </div>
        <div className={style.card}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}> Total Scope 2 Emissions - (2020 -21)</span>
          <p>Stearn Electric CO LTD</p>
          <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "25px" }}>37,063 kgCO2/KwH</p>
        </div>

      </div>
    </>
  );
}
