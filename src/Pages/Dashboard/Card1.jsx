import React from "react";
import Scope1CE from "./Scope1CE";
import Scope2CE from "./Scope2CE";
import TotalCE from "./TotalCE";
export default function Card() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "100%",
      }}
    >
      <Scope1CE />
      <Scope2CE />
      <TotalCE />
    </div>
  );
}
