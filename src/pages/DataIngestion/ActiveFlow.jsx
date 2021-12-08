import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './ActiveFlow.module.css';
import { Context } from "../../context/Contexts";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ActiveFlow = () => {

    const context = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        context.setShowNavTop(true);
        // history.push("/dashboard");
        // window.open('https://flow.kendrasustain.com');
    }, [context, history]);

    const buttons = [
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/3')} >Swansea Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/14')}>Current Settlement BSUoS Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/13')}>Daily Balancing Costs Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/12')}>Historic GTMA Trade Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/10')}>Energy Price Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/8')}>Elexon Energy Transmit Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/7')}>Solar Energy Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/6')}>Wind Energy Data Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/2')}>Carbon Intensity Flow</Button>,
        <Button onClick={() => window.open('https://flow.kendrasustain.com/workflow/11')}>STOR DA Auction Result Data Flow</Button>,
    ];


    return (

        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
                Active Flows
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                {/* <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}

                <ButtonGroup style={{ marginLeft: "500px" }}
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                >
                    {buttons}
                </ButtonGroup>

                {/* </Grid> */}
            </Box>
        </div>

    );
}

export default ActiveFlow;