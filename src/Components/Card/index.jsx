import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";

export default function MediaCard({ img, title, content, buttons, style }) {
  return (
    <Card style={{ minHeight: "140px", textAlign: "center", ...style  }}>
      {img ? (
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
      ) : null}
      {content ? (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Divider/>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      ) : null}
      {buttons ? (
        <CardActions>
          {buttons.map((item) => (
            <Button onClick={item.onClick}> {item.lable} </Button>
          ))}
        </CardActions>
      ) : null}
    </Card>
  );
}
