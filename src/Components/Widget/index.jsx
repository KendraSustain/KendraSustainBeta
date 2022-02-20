import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { IconButton } from '@mui/material'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem'
  },
  spacer: {
    flexGrow: 1
  },
  body: {
    padding: '0.5rem',
    flexGrow: 1
  }
})

export default function Widget ({ id, onRemoveItem, Item = () => <>Hello</> }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <div className={classes.spacer} />
        <IconButton aria-label='delete' onClick={() => onRemoveItem(id)}>
          <CloseIcon fontSize='small' />
        </IconButton>
      </div>
      <div className={classes.body}>
        <Item />
      </div>
    </Card>
  )
}
