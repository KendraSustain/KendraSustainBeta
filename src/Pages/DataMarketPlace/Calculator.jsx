import React from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Paper from "@mui/material/Paper";
import { MTable } from "../../Components";

const columns = [
  {
    title: "pollutant",
    field: "pollutant",
    sorting: false,
    filtering: false,
    headerStyle: { color: "#fff" },
  },
  { title: "sector", field: "sector" },
  { title: "source", field: "source", align: "center" },
  { title: "Fuel Name", field: "fuel_name", align: "center" },
  { title: "Year", field: "year", align: "center", grouping: false },
  {
    title: "Emission Factor",
    field: "emission_factor",
    align: "center",
    grouping: false,
  },
  { title: "unit", field: "unit", align: "center", grouping: false },
  {
    title: "activity units",
    field: "activity_unit",
    align: "center",
    grouping: false,
  },
];

export default function EmissionFactor() {
  const [tableData, setTableData] = React.useState();

  const [year, setYear] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [pollutant, setPollutant] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event) => {
    setSector(event.target.value);
  };
  const handleChange2 = (event) => {
    setPollutant(event.target.value);
  };

  const data2 = {
    year: year,
    sector: sector,
    pollutant: pollutant,
  };

  const handleSubmit = async () => {
    const apiGetData = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Accept: "application/json",
      },
    });

    await apiGetData
      .get(
        `/api/emissionfactor?year=${data2.year}&sector=${data2.sector}&pollutant=${data2.pollutant}`
      )
      .then((res) => {
        setTableData(res.data);
      });
  };

  const years = ["2015", "2016", "2017", "2018", "2019"];
  const sectors = [
    "Energy",
    "Memo",
    "Industrial Processes and Other Product Use",
    "Waste",
    "Agriculture",
  ];
  const pollutants = ["Methane", "Nitrous Oxide", "Carbon Dioxide as Carbon"];

  return (
    <div
      style={{
        padding: "0 10px",
      }}
    >
      {/* <BasicModal open={open} setOpen={setOpen} /> */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <MTable
          columns={columns}
          tableData={tableData}
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
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>Emission Factors</span>
              <div
                style={{
                  width: "500px",
                  height: "100px",
                  // padding : '10px 0',
                  display: "flex",
                  // background:'red',
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <FormControl>
                  <InputLabel>Year</InputLabel>
                  <Select style={{ height: "50px" }} value={year} label="Year" onChange={handleChange}>
                    {years.map((years, pos) => {
                      return (
                        <MenuItem style={{ display: "list-item", padding: "5px" }} key={pos} value={years}>
                          {years}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Year</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel >Sector</InputLabel>
                  <Select style={{ height: "50px" }}
                    value={sector}
                    label="Sector"
                    onChange={handleChange1}
                  >
                    {sectors.map((sectors, pos) => {
                      return (
                        <MenuItem style={{ display: "list-item", padding: "5px" }} key={pos} value={sectors}>
                          {sectors}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Sector</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel>Pollutants</InputLabel>
                  <Select style={{ height: "50px" }}
                    value={pollutant}
                    label="Pollutant"
                    onChange={handleChange2}
                  >
                    {pollutants.map((pollutants, pos) => {
                      return (
                        <MenuItem style={{ display: "list-item", padding: "5px" }} key={pos} value={pollutants}>
                          {pollutants}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Pollutants</FormHelperText>
                </FormControl>
                <Button
                  variant="outlined"
                  sx={{
                    position: "relative",
                    top: "-10px",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          }
          icons={{
            Add: () => <AddBoxIcon style={{ color: "#0b2738" }} />,
            Edit: () => <EditIcon style={{ color: "#0a5e91" }} />,
            Delete: () => <DeleteOutlineIcon style={{ color: "red" }} />,
          }}
        />
      </Paper>
    </div>
  );
}
