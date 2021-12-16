import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './KendraBlogCard.module.css';

export default function BlogCard() {
    return (
        <div className={styles.container2}>
            <Card sx={{ margin: "25px 5px 0 0px", borderRadius: "15px", height: "88%" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/background9.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Carbon Intensity
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The Carbon Intensity forecast includes CO2 emissions related to electricity generation only. This includes emissions from all large metered power stations, interconnector imports, transmission and distribution losses, and accounts for national electricity demand, embedded wind and solar generation.
                        The demand and generation by fuel type (gas, coal, wind, nuclear, solar etc.) for each region is forecast several days ahead at 30-min temporal resolution using an ensemble of state-of-the-art supervised Machine Learning (ML) regression models. The forecasts are updated every 30 mins using a nowcasting technique to adjust the forecasts a short period ahead.
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    );
}
