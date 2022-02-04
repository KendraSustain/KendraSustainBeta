import React from 'react';
import Button from '@mui/material/Button';
import styles from './Buttons.module.css';
import { useHistory } from "react-router-dom";

const Buttons = (props) => {
    const history = useHistory();

    return (
        <div className={styles.container}>
            <Button className={styles.btn} variant="contained" onClick={props.onClick}>{props.value}</Button>
        </div>
    )
}

export default Buttons;

