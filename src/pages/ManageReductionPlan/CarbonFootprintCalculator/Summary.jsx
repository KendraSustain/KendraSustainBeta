import React, { useState, useContext, useEffect } from 'react';
import AssetCard from '../../../components/Dash/KendraBlogCard/AssetCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './CarbonFootprint.module.css';
import { Context } from '../../../context/Contexts';

const Summary = () => {
    const context = useContext(Context);

    const metadata = [
        {
            "name": "Total emissions (MtCO2e)",
            // "data": Math.max(...consumption[0])
            "data": "19,081.22"

        },
        {
            "name": "Scope 1 (MtCO2e)",
            // "data": Math.min(...consumption[0])
            "data": "16,083.65"

        },
        {
            "name": "Scope 2 (MtCO2e)",
            "data": "18,057.76"
        },
        {
            "name": "Scope 3 (MtCO2e)",
            // "data": Math.max(...emission[0])
            "data": "78,368.35"

        }
    ]

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: "flex", flexDirection: "column" }}>
                    {metadata.map((item, pos) =>
                        <Grid key={pos} item xs={4} >
                            <AssetCard typo1={item.name} typo2={item.data} />
                        </Grid>

                    )}
                </Grid>
            </Box>
        </div>);
};

export default Summary;
