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
    createData('Predicted Energy Consumption (kW/h)', 822, 820, 787, 762, 795, 771, 780, 793, 862),
    createData('Predicted Carbon Emission (kgCO2/kWh)', 856, 800, 800, 600, 589, 564, 543, 678, 654),
];

export default function BasicTable2() {
    return (
        <TableContainer component={Paper} style={{ borderRadius: "15px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Months</TableCell>
                        <TableCell align="right">1 Jan</TableCell>
                        <TableCell align="right">8 Jan</TableCell>
                        <TableCell align="right">15 Jan</TableCell>
                        <TableCell align="right">22 Jan</TableCell>
                        <TableCell align="right">28 Jan</TableCell>
                        <TableCell align="right">2 Feb</TableCell>
                        <TableCell align="right">9 Feb</TableCell>
                        <TableCell align="right">16 Feb</TableCell>
                        <TableCell align="right">23 Feb</TableCell>
                        {/* <TableCell align="right">Oct</TableCell>
                        <TableCell align="right">Nov</TableCell> */}
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