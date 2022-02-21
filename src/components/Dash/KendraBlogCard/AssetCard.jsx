import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './KendraBlogCard.module.css'

export default function AssetCard (props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, textAlign: 'center', color: 'black' }}
          color='text.secondary'
          gutterBottom
        >
          {props.typo1}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant='body2'>
          {props.typo2}
          {/* well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
    </Card>
  )
}
