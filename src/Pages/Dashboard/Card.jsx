import React from "react";
import style from "./Card.module.css";
export default function Card() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <span>Carbon Emission : DK13WPW</span>
          <p>1,255</p>
        </div>
        <div className={style.card}>
          <span>Carbon Emission : DC17PXA</span>
          <p>1,050</p>
        </div>
        <div className={style.card}>
          <span> Total Carbon Emission : MAPN-K05G00388</span>
          <p>2,580</p>
        </div>

        <div className={style.card}>
          <span>Carbon Emission : MPAN-G4w00541251826</span>
          <p>2,012</p>
        </div>
      </div>
    </>
  );
}
