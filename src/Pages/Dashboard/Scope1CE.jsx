import React from "react";
import { Gauge } from "../../Components";

export default function Scope1CE() {
  return (
    <div>
      <Gauge
        des="This is description for gause"
        label={"Cumulative Carbon Emissions for All vehicle"}
        value={1255}
        name={"Scope 1"}
        title={"Emission"}
        max={3000}
        unit={"kwHr"}
        buttom={"Year 2021"}
      />
    </div>
  );
}
