import React, { useContext } from "react";

import { Card, CardHeader, Divider } from "@material-ui/core";
import screen from "./CarbonFootprint.module.css";
import { Context } from "../../../context/Contexts";
import style from "./Scope3.module.css";
import BarCharts from "../../../components/Graphs/BarCharts";
import PieCharts from "../../../components/Graphs/PieCharts";
import DATA from './Scoope3_data.json';
const barStyle = {
  backgroundColor: ["#272253", "#36A2DE", "#586785", "#4B5FAE"],
  barPercentage: 0.5,
  barThickness: 40,
  borderRadius: 2,
  categoryPercentage: 0.5,
  label: "Emission",
  maxBarThickness: 35,
};

function Scope3() {
  const context = useContext(Context);
  return (
    <div
      className={[screen.monitor, context.close ? screen.close : ""].join(" ")}
    >
      <BarCharts
        mydata={DATA.data}
        labels={DATA.data.labels}
        title="Mothly scope 3 emission (MtCo2e) "
      />
      <div className={style.card}>
        {DATA.cardDATA.map((element, pos) => (
          <Card key={pos} className={style.textCard}>
            <CardHeader title={element.titile} />
            <div className={style.midText}> {element.value} </div>
            <div>{element.sub}</div>
          </Card>
        ))}
      </div>

      <Card
        style={{
          display: "flex",
          margin: "20px 0",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "45%",
          }}
        >
          <BarCharts
            barOption={{ height: 300 }}
            axis={{ indexAxis: "y" }}
            data={DATA.singleData.data}
            styleBar={{ ...barStyle, maxBarThickness: 50 }}
            labels={DATA.singleData.labels}
            title="Lowest scope 3 (MtCO2e)"
          />
        </div>
        <div
          style={{
            width: "45%",
          }}
        >
          <BarCharts
            barOption={{ height: 300 }}
            axis={{ indexAxis: "y" }}
            data={DATA.singleData.data}
            styleBar={{ ...barStyle, maxBarThickness: 50 }}
            labels={DATA.singleData.labels}
            title="Highest scope 3 (MtCO2e)"
          />
        </div>
      </Card>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <BarCharts
            barOption={{ height: 300 }}
            data={DATA.singleData.data}
            labels={DATA.singleData.labels}
            className={style.bottomBar}
            styleBar={{ ...barStyle, backgroundColor: "#4B5FAE" }}
            title="Previous year"
          />
        </div>
        <div style={{ width: "50%" }}>
          <PieCharts
            barOption={{ height: 300 }}
            title={DATA.pieData.label}
            data={DATA.pieData.data}
            labels={DATA.pieData.labels}
            styleBar={{ ...barStyle, backgroundColor: "#4B5FAE" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Scope3;
