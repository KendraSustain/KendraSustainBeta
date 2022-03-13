import React from "react";
import { Gauge } from "../../Components";

export default function Total() {
  return (
    <div>
      <Gauge
        label={"Total Caron Emission"}
        value={70}
        name={"Scope 1"}
        title={'Emission'}
        max={90}
        unit={'kwHr'}
        
      />
    </div>
  );
}
