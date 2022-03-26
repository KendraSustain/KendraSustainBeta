import BarChart from "./index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";

export default function CardChart(props) {
  const [LABELS, setLABELS] = useState(props.x_items);
  const [filter, setFilter] = useState(props.filterYear || []);
  const [showYear, setShowYear] = useState(0);
  const [Data, setData] = useState(props.y_item);
  const handleChange = (e) => {
    setShowYear(e.target.value);
    if (e.target.value === 0) {
      setLABELS(props.x_items);
      setData(props.y_item);
      return;
    }
    const tempData = [];
    let temp = props.x_items.map((item, pos) => {
      if (item.includes(e.target.value)) {
        tempData.push(props.y_item[pos]);
        return item;
      }
      return null;
    });

    let uu = [];

    for (let i of temp) i && uu.push(i);

    setLABELS(uu);
    setData(tempData);
  };

  useEffect(() => {
    const year = [];
    for (let i = 2015; i <= 2030; i++) {
      props.x_items.forEach((item) => {
        if (item.includes(i)) {
          year.push(i);
          console.log(item);
        }
      });
    }
    let uniqueChars = [...new Set(year)];
    setFilter(uniqueChars);
    setLABELS(props.x_items);
    setData(props.y_item);
  }, [props]);

  return (
    <Card>
      {props.showYear && (
        <CardHeader
          title={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div></div>
              <FormControl
                style={{
                  width: "100px",
                }}
              >
                <InputLabel id="select-year">Select Year</InputLabel>
                <Select
                  id="select"
                  labelId="select-year"
                  value={showYear}
                  label="Select Year"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>ALL</MenuItem>
                  {filter.map((item, pos) => (
                    <MenuItem key={pos} value={item}>
                      {item}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          }
        />
      )}

      <CardContent>
        {(props.type === "bar") | (props.type === "line") ? (
          <BarChart {...props} x_items={LABELS} y_item={Data} />
        ) : (
          <PieChart data={props.data} />
        )}
      </CardContent>
    </Card>
  );
}
