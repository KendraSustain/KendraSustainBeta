import React, { useState, useContext, useEffect } from "react";
import styles from './DataMonitor.module.css';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
import { Context } from '../../../context/Contexts';
import LineChart from '../../../components/chart/LineChart';
import BarChart from '../../../components/chart/BarChart';
import PieChart from '../../../components/chart/PieChart';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
// import { Data2 } from "../../../dummyData";
import axios from "axios";
import LineCharts from "../../../components/Graphs/LineCharts";
import BarCharts from "../../../components/Graphs/BarCharts";
import { Scope1 } from "../../../Data";
import DyTable from "../../../components/Table/DyTable";
import PieCharts from "../../../components/Graphs/PieCharts";




const ScopeMonitor = () => {
    const context = useContext(Context);
    const [rows, setRows] = React.useState([]);
    const [labels, setLabels] = React.useState([]);
    const [value, setValue] = React.useState([]);

    const columns = [
        { id: 'Scope 1', label: 'Sources', minWidth: 170 },
        { id: 'Energy Consumption(MWh)', label: 'Energy Consumption(MWh)', minWidth: 100 },
        {
            id: 'GHG Emissions(tCO2e)',
            label: 'GHG Emissions(tCO2e)',
            minWidth: 170,
            align: 'right',

        },

    ];

    useEffect(() => {
        console.log(Scope1);
        setRows(Scope1)
        async function getData() {


            // console.log(location.state.Server);
            const labels = ['Business Fuel - Petrol', 'Business Fuel - Diesel', 'Buildings - Fuel Oil', 'Transport-Company Fleet - Diesel', 'Transport-Company Fleet - Petrol', 'Transport-Company Fleet - Diesel']
            const value = [83407, 677300, 162042, 55520, 2326, 479780]
            setLabels(labels)
            setValue(value)


        }
        getData();

        context.setShowNavTop(true);
    }, []);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={12}>
                        <DyTable columns={columns} rows={rows} head="Consumption" />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <PieCharts labels={labels} data={value} title="Energy Consumption" time="Energy Consumption" />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <BarCharts labels={labels} data={value} title="Energy Consumption" time="Energy Consumption" label="Energy Consumption" />
                    </Grid>


                </Grid>
            </Box>
        </div>
    )
}

export default ScopeMonitor;
