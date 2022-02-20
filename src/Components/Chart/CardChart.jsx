import BarChart from "./index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";

import React from "react";
import PieChart from "./PieChart";

export default function CardChart(props) {
  return (
    <div style={{
      marginTop : '8px'
    }} >
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          {(props.type === "bar") | (props.type === "line") ? (
            <BarChart {...props} />
          ) : (
            <PieChart data={props.data} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
