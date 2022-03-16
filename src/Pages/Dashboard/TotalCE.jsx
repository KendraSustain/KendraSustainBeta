import React from "react";
import { Gauge } from "../../Components";

export default function Total() {
  return (
    <div>
      <Gauge
        label={"Combined Cumulative Caron Emissions for Scope 1 & Scope 2"}
        des="This is description for gause"
        value={2580}
        name={"Scope 1"}
        title={"Emission"}
        max={3000}
        unit={"kwHr"}
        buttom={"Year 2021"}
      />
    </div>
  );
}
