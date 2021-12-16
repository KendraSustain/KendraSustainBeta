// import { useEffect, useContext } from "react";
// import { useHistory } from "react-router";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import styles from './ActiveFlow.module.css';
// import { Context } from "../../context/Contexts";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';

// const ActiveFlow = () => {

//     const context = useContext(Context);
//     const history = useHistory();
//     useEffect(() => {
//         context.setShowNavTop(true);
//         // history.push("/dashboard");
//         // window.open('https://flow.kendrasustain.com');
//     }, [context, history]);

//     const buttons = [
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/3')} >Swansea Data Flow</Button>, "Date Created",
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/14')}>Current Settlement BSUoS Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/13')}>Daily Balancing Costs Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/12')}>Historic GTMA Trade Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/10')}>Energy Price Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/8')}>Elexon Energy Transmit Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/7')}>Solar Energy Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/6')}>Wind Energy Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/2')}>Carbon Intensity Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/11')}>STOR DA Auction Result Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/19')}>Goby Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/15')}>LSBU Data flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/9')}>Energy Generated by Fuel Data Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/5')}>Elexon Energy Demand Flow</Button>,
//         <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/4')}>Elexon Energy Frequency Flow</Button>,
//     ];


//     return (

//         <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
//             <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
//                 Active Flows
//             </Grid>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     '& > *': {
//                         m: 1,
//                     },
//                 }}
//             >
//                 {/* <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}

//                 <ButtonGroup style={{ marginLeft: "500px" }}
//                     orientation="vertical"
//                     aria-label="vertical contained button group"
//                     variant="text"
//                 >
//                     {buttons}
//                 </ButtonGroup>

//                 {/* </Grid> */}
//             </Box>
//         </div>

//     );
// }

// export default ActiveFlow;
import * as React from "react";
import { useContext, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styles from './Realtime.module.css';
import { Context } from "../../context/Contexts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const columns = [
    { id: "name", label: "Data Feeds", minWidth: 170 },
    { id: "code", label: "Crated-On", minWidth: 100 },
    {
        id: "population",
        label: "Status",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US")
    },

];

function createData(name, code, population) {
    return { name, code, population };
}

const rows = [
    createData(<a href="https://flow.kendrasustain.com/workflow/3">Swansea Data Flow</a>, "19-11-2021", "Active"),
    createData(<a href="https://flow.kendrasustain.com/workflow/14"> Current settlement BSUoS data Flow</a>, "18-11-2021", "Active"),
    createData(<a href="https://flow.kendrasustain.com/workflow/13">Daily Balancing Cost Data Flow </a>, "18-11-2021", "Active"),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/12">Historic GTMA Trade Data Flow </a>,
        "18-11-2021",
        "Active",

    ),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/10"> Energy Price Data Flow</a>,
        "18-11-2021",
        "Active",

    ),
    createData(<a href="https://flow.kendrasustain.com/workflow/8">Elexon Energy Transmit Flow</a>, "20-11-2021", "Active"),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/7">Solar Energy Data Flow</a>,
        "18-11-2021",
        "Active",

    ),
    createData(<a href="https://flow.kendrasustain.com/workflow/6">Wind Energy Data Flow</a>, "18-11-2021", "Active"),
    createData(<a href="https://flow.kendrasustain.com/workflow/2">Carbon Intensity Flow</a>, "18-11-2021", "Active"),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/11">STOR DA Auction Result Data Flow </a>,
        "18-11-2021",
        "Active",


    ),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/19">Goby Data Flow</a>,
        "18-11-2021",
        "Active",

    ),
    createData(<a href="https://flow.kendrasustain.com/workflow/15">LSBU Data Flow</a>, "19-11-2021", "Active"),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/9">Energy Generated By Fuel Data Flow</a>,
        "18-11-2021",
        "Active",

    ),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/5">Elexon Energy Demand Flow</a>,
        "18-11-2021",
        "Active",

    ),
    createData(
        <a href="https://flow.kendrasustain.com/workflow/4">Elexon Energy Frequency Flow</a>,
        "18-11-2021",
        "Active",

    ),
];

export default function ActiveFlow() {
    const context = useContext(Context);
    useEffect(() => {
        context.setShowNavTop(true);
    }, [context]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className={[styles.register, context.close ? styles.close : ""].join(" ")}>
            <Paper sx={{ width: "100%" }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" colSpan={12} style={{ fontWeight: "bold", fontSize: "25px" }}>
                                    Flows
                                </StyledTableCell>
                                {/* <TableCell align="center" colSpan={3}>
                Details
              </TableCell> */}
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === "number"
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
