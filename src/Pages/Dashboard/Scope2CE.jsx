import React from "react";
import { Gauge } from "../../Components";

export default function Scope2CE() {
  return (
    <div>
      <Gauge
        label={"Carbon Emission for Scope 2"}
        value={1050}
        name={"Scope 1"}
        title={'Emission'}
        max={3000}
        unit={'kwHr'}
        
      />
    </div>
  );
}
