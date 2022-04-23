import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  width: '570px',
}

export default function BasicModal(props) {
  const [cardData, setCardData] = React.useState(props.item)

  const handleClose = () => props.setOpen(false)

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography
            style={{
              marginBottom: '20px',
            }}
            variant="h6"
            component="h2"
          >
            Edit Account
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label={'Full Name'}
                variant={'outlined'}
                fullWidth
                value={cardData.fullname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={'Email'}
                variant={'outlined'}
                fullWidth
                value={cardData.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={'Card Number'}
                variant={'outlined'}
                fullWidth
                value={cardData.cardnumber}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label={'Expiration Date'}
                variant={'outlined'}
                fullWidth
                value={cardData.expire}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label={'CVV'}
                variant={'outlined'}
                fullWidth
                value={cardData.cvv}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label={'Postal'}
                variant={'outlined'}
                fullWidth
                value={cardData.postal}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                label={'Address'}
                variant={'outlined'}
                fullWidth
                value={cardData.addess}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
