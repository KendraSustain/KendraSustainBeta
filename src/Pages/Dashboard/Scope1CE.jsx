import React from "react";
import { Gauge } from "../../Components";

export default function Scope1CE() {
  return (
    <div>
      <Gauge
        label={"Carbon Emission for Scope 1"}
        value={20}
        name={"Scope 1"}
        title={'Emission'}
        max={90}
        unit={'kwHr'}

      />
    </div>
  );
}
