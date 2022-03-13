import React from "react";
import { Gauge } from "../../Components";

export default function Total() {
  return (
    <div>
      <Gauge
        label={"Total Caron Emission"}
        value={2580}
        name={"Scope 1"}
        title={'Emission'}
        max={3000}
        unit={'kwHr'}
        
      />
    </div>
  );
}
