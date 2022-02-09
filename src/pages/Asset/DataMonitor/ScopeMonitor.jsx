import React, { useState, useContext, useEffect } from "react";
import styles from "./DataMonitor.module.css";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import { Context } from "../../../context/Contexts";

import BarCharts from "../../../components/Graphs/BarCharts";
import { Scope1 } from "../../../Data";
import PieCharts from "../../../components/Graphs/PieCharts";
import DyTable from "../../../components/Table/DyTable";

const ScopeMonitor = () => {
  const [tableData, setTableData] = useState(Scope1);
  const context = useContext(Context);
  const [labels, setLabels] = React.useState([
    "Business Fuel - Petrol",
    "Business Fuel - Diesel",
    "Buildings - Fuel Oil",
    "Transport-Company Fleet - Diesel",
    "Transport-Company Fleet - Petrol",
    "Transport-Company Fleet - Diesel",
  ]);
  const [value, setValue] = React.useState([]);

  const columns = [
    {
      title: "Source",
      field: "Source",
      sorting: false,
      filtering: true,
      headerStyle: { color: "#fff" },
    },
    { title: "Enrgy Consumption(MWh)", field: "Energy Consumption(MWh)" },
    {
      title: "GHG Emission(tCO2e)",
      field: "GHG Emissions(tCO2e)",
      align: "center",
      grouping: false,
    },
  ];

  useEffect(() => {
    console.log(Scope1);
    async function getData() {
      const value = [83407, 677300, 162042, 55520, 2326, 479780];
      setLabels(labels);
      setValue(value);
    }

    getData();

    context.setShowNavTop(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <DyTable
              columns={columns}
              tableData={tableData}
              title="Scope 1"
              onSelect={(selectedRows) => console.log(selectedRows)}
              editable={{
                onRowAdd: (newRow) =>
                  new Promise((resolve, reject) => {
                    setTableData([...tableData, newRow]);

                    setTimeout(() => resolve(), 500);
                  }),
                onRowUpdate: (newRow, oldRow) =>
                  new Promise((resolve, reject) => {
                    const updatedData = [...tableData];
                    updatedData[oldRow.tableData.id] = newRow;
                    setTableData(updatedData);
                    setTimeout(() => resolve(), 500);
                  }),
                onRowDelete: (selectedRow) =>
                  new Promise((resolve, reject) => {
                    const updatedData = [...tableData];
                    updatedData.splice(selectedRow.tableData.id, 1);
                    setTableData(updatedData);
                    setTimeout(() => resolve(), 1000);
                  }),
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <PieCharts
              labels={labels}
              data={value}
              title="Fuel Consumption"
              time="Fuel Consumption"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <BarCharts
              labels={labels}
              data={value}
              title="Fuel Consumption"
              time="Fuel Consumption"
              label="Fuel Consumption"
              styleBar={{
                barThickness: 50,
                maxBarThickness: 40,
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ScopeMonitor;
