import React from "react";
import { Gauge } from "../../Components";

export default function Scope2CE() {
  return (
    <div>
      <Gauge
        label={"Cumulative Carbon Emissions for Stearn Building"}
        value={1050}
        name={"Scope 1"}
        title={"Emission"}
        max={3000}
        unit={"kwHr"}
        buttom={"Year 2021"}
      />
    </div>
  );
}
