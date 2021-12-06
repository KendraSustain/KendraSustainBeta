import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './KendraBlogCard.module.css';

export default function KendraBlogCard() {
    return (
        <div className={styles.container}>
            <Card sx={{ margin: "0 5px 0 20px", borderRadius: "15px", height: "100%" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/backgroundimg6.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Kendra Sustain
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Kendra Sustain enables enterprises to embed data-driven Sustainability Decision-Making across business operations by providing enterprises with the tools to build a Circular Economy model through Data and Artificial Intelligence.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
