import React from 'react';
import Button from '@mui/material/Button';
import styles from './Buttons.module.css';
import { useHistory } from "react-router-dom";

const Buttons = () => {
    const history = useHistory();

    return (
        <div className={styles.container}>
            <Button className={styles.btn} variant="contained" onClick={() => history.push("/ingestion/flow")}>Data Ingestion</Button>
            <Button className={styles.btn} variant="contained" onClick={() => history.push("/measure/register")}>Measure</Button>
            <Button className={styles.btn} variant="contained" onClick={() => history.push("/reduction/models")}>Manage Reduction Plan</Button>
            <Button className={styles.btn} variant="contained" onClick={() => history.push("/offset")}>Offset</Button>
        </div>
    )
}

export default Buttons;
