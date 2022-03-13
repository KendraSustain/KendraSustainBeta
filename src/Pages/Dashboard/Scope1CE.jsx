import React from "react";
import { Gauge } from "../../Components";

export default function Scope1CE() {
  return (
    <div>
      <Gauge
        label={"Carbon Emission for Scope 1"}
        value={1255}
        name={"Scope 1"}
        title={'Emission'}
        max={3000}
        unit={'kwHr'}

      />
    </div>
  );
}
