import React from "react";
import style from "./Card.module.css";
export default function Card() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <span>Cumulative Carbon Emissions for All vehicle</span>
          <p>1,255</p>
        </div>
        <div className={style.card}>
          <span>Cumulative Carbon Emissions for Stearn Building </span>
          <p>1,050</p>
        </div>
        <div className={style.card}>
          <span>Combined Cumulative Caron Emissions for Scope 1 & Scope 2</span>
          <p>2,580</p>
        </div>
      </div>
    </>
  );
}
