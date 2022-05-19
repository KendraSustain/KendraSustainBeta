import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
interface PropType {
  img?: string
  title?: string
  content?: React.ReactNode
  buttons?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    label: string
  }[]
  style: any
}
const MediaCard: React.FC<PropType> = ({
  img,
  title,
  content,
  buttons,
  style,
}) => {
  return (
    <Card style={{ minHeight: '120px', textAlign: 'center', ...style }}>
      {img ? (
        <CardMedia
          component="img"
          height="120"
          image={img}
          alt="green iguana"
        />
      ) : null}
      {content ? (
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography variant="h5" color="text.primary">
            {content}
          </Typography>
        </CardContent>
      ) : null}
      {buttons ? (
        <CardActions>
          {buttons.map((item, key) => (
            <Button key={key} onClick={item.onClick}>
              {item.label}
            </Button>
          ))}
        </CardActions>
      ) : null}
    </Card>
  )
}
export default MediaCard
