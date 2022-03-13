import React from "react";
import { Gauge } from "../../Components";

export default function Scope2CE() {
  return (
    <div>
      <Gauge
        label={"Carbon Emission for Scope 2"}
        value={35}
        name={"Scope 1"}
        title={'Emission'}
        max={90}
        unit={'kwHr'}
        
      />
    </div>
  );
}
