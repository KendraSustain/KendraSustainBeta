import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec) {
    return { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec };
}

const rows = [
    createData('Predicted Energy Consumption (kW/h)', 856, 800, 800, 600, 589, 564, 543, 678, 654, 765, 665, 600),
    createData('Predicted Carbon Emission (kgCO2/kWh)', 185, 146, 102, 113, 125, 120, 130, 123, 125, 142, 80),
];

export default function BasicTable2() {
    return (
        <TableContainer component={Paper} style={{ borderRadius: "15px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Months</TableCell>
                        <TableCell align="right">Jan</TableCell>
                        <TableCell align="right">Feb</TableCell>
                        <TableCell align="right">Mar</TableCell>
                        <TableCell align="right">Apr</TableCell>
                        <TableCell align="right">May</TableCell>
                        <TableCell align="right">Jun</TableCell>
                        <TableCell align="right">Jul</TableCell>
                        <TableCell align="right">Aug</TableCell>
                        <TableCell align="right">Sep</TableCell>
                        <TableCell align="right">Oct</TableCell>
                        <TableCell align="right">Nov</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            align="left"
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* <TableCell component="th" scope="row" align="right">
                                {row.name}
                            </TableCell> */}
                            <TableCell align="right">{row.jan}</TableCell>
                            <TableCell align="right">{row.feb}</TableCell>
                            <TableCell align="right">{row.mar}</TableCell>
                            <TableCell align="right">{row.apr}</TableCell>
                            <TableCell align="right">{row.may}</TableCell>
                            <TableCell align="right">{row.jun}</TableCell>
                            <TableCell align="right">{row.jul}</TableCell>
                            <TableCell align="right">{row.aug}</TableCell>
                            <TableCell align="right">{row.sep}</TableCell>
                            <TableCell align="right">{row.oct}</TableCell>
                            <TableCell align="right">{row.nov}</TableCell>
                            <TableCell align="right">{row.dec}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}