// import styles from '../Asset/DataMonitor/DataMonitor.module.css';
import styles from "./Factor.module.css";
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Contexts";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
// import './App.css';
import MaterialTable from "material-table";
import CalculateIcon from "@mui/icons-material/Calculate";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FactorTree from "./FactorTree";
// import CalModal from './CalModal';
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CalModal from "./CalModal";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState();
  // const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = React.useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const context = useContext(Context);
  const [year, setYear] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [pollutant, setPollutant] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setYear(event.target.value);
    // setSector(event.target.value);
  };
  const handleChange1 = (event) => {
    // setYear(event.target.value);
    setSector(event.target.value);
  };
  const handleChange2 = (event) => {
    // setYear(event.target.value);
    setPollutant(event.target.value);
  };

  const data2 = {
    year: year,
    sector: sector,
    pollutant: pollutant,
  };

  const handleSubmit = async () => {
    // console.log(data2);

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
        console.log(res.data);
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

  // const handleClick = (props) => {
  //     setOpen(true);

  //     <CalModal open={open} />
  //     // console.log(rowdata);
  // }

  useEffect(() => {
    context.setShowNavTop(true);
  }, []);

  const handleOpen = (data) => {
    setOpen(true);
    // setData(data);
    <CalModal open={true} data={data} />;
  };

  return (
    <div
      className={[styles.factor, context.close ? styles.close : ""].join(" ")}
    >
      <div></div>
      {/* <div><button onClick={handleSubmit} > Submit</button></div> */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <MaterialTable
          columns={columns}
          data={tableData}
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
          actions={[
            {
              icon: () => <CalculateIcon />,
              tooltip: "Calculate",
              onClick: (e, data) => handleOpen(data),
              // isFreeAction:true
            },
          ]}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,
            exportAllData: true,
            exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({
              disabled: rowData.age == null,
              // color:"primary"
            }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#00034f", color: "white" },
          }}
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <snap>Emission Factors</snap>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  transform: "scale(0.8)",
                }}
              >
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Year
                  </InputLabel>
                  <Select value={year} label="Year" onChange={handleChange}>
                    {years.map((years) => {
                      return <MenuItem value={years}>{years}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText>Select Year</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Sector
                  </InputLabel>
                  <Select
                    value={sector}
                    label="Sector"
                    onChange={handleChange1}
                  >
                    {sectors.map((sectors) => {
                      return <MenuItem value={sectors}>{sectors}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText>Select Sector</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Pollutants
                  </InputLabel>
                  <Select
                    value={pollutant}
                    label="Pollutant"
                    onChange={handleChange2}
                  >
                    {pollutants.map((pollutants) => {
                      return (
                        <MenuItem value={pollutants}>{pollutants}</MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Pollutants</FormHelperText>
                </FormControl>
                <Button
                  className={classes.root}
                  variant="outlined"
                  onClick={handleSubmit}
                style = {{
                    position : 'relative',
                    top : '-10px'
                }}
                 
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
      <Modal
        open={open}
        onClose={handleClose}
        data={data}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Duis mollis, est non commodo luctus
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {/* <FactorTree /> */}
    </div>
  );
}
