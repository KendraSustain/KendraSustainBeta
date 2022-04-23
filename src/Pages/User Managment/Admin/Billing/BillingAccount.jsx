import { Box, Button, TextField, Typography, Grid } from '@material-ui/core'
import React from 'react'
import style from './index.module.css'
import BasicModal from './Modal'
export default function BillingAccount() {
  const [open, setOpen] = React.useState(false)
  const [cardData, setCardData] = React.useState([
    {
      fullname: 'Himanshu Gunwant',
      email: 'hgunwant2312@gmail.com',
      cardnumber: 123456367432,
      cardcompany:
        'https://i.ibb.co/qnrzFyb/toppng-com-visa-us-vector-logo-free-download-400x400.png',
      cvv: 123,
      expire: new Date().getFullYear() + ' / ' + new Date().getMonth(),
      postal: 2321,
      addess: 'Jakhandevi Almora',
    },
  ])
  const [dumItem, setDumItem] = React.useState({
    fullname: 'Name',
    email: 'user@gmail.com',
    cardnumber: 123456367432,
    cardcompany:
      'https://i.ibb.co/qnrzFyb/toppng-com-visa-us-vector-logo-free-download-400x400.png',
    cvv: 123,
    expire: '2022 / 01',
    postal: 1234,
    addess: 'Your Address',
  })
  const styles = {
    bgcolor: 'var(--white)',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    width: '800px',
    margin: '20px 0',
  }

  return (
    <div className={style.main}>
      <BasicModal open={open} item={dumItem} setOpen={setOpen} />;
      <div className={style.home}>
        {cardData.map((item, pos) => (
          <Box key={pos} sx={styles}>
            <Typography
              style={{
                marginBottom: '20px',
              }}
              variant="h6"
              component="h2"
            >
              Billing Account
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant={'caption'} component={'p'}>
                  Name
                </Typography>
                <Typography component={'p'}>{item.fullname}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant={'caption'} component={'p'}>
                  Email
                </Typography>
                <Typography component={'p'}>{item.email}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant={'caption'} component={'p'}>
                  Card Number
                </Typography>
                <Typography component={'p'}>{item.cardnumber}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant={'caption'} component={'p'}>
                  Expiration Date
                </Typography>
                <Typography component={'p'}>{item.expire}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant={'caption'} component={'p'}>
                  CVV
                </Typography>
                <Typography component={'p'}>{item.cvv}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant={'caption'} component={'p'}>
                  Postal
                </Typography>
                <Typography component={'p'}>{item.postal}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant={'caption'} component={'p'}>
                  Address
                </Typography>
                <Typography component={'p'}>{item.addess}</Typography>
              </Grid>
              <Grid item xs={6}>
                <i
                  className="fas fa-edit"
                  onClick={() => {
                    setDumItem(item)
                    setOpen(true)
                  }}
                ></i>
                <i className="fas fa-trash"></i>
              </Grid>
            </Grid>
          </Box>
        ))}

        <Box sx={styles}>
          <Typography
            style={{
              marginBottom: '20px',
            }}
            variant="h6"
            component="h2"
          >
            Add Account
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                component={'p'}
                style={{
                  marginBottom: '20px',
                }}
              >
                Name
              </Typography>
              <TextField
                fullWidth
                variant={'outlined'}
                label={'Enter Full Name'}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                component={'p'}
                style={{
                  marginBottom: '20px',
                }}
              >
                Email
              </Typography>
              <TextField fullWidth variant={'outlined'} label={'Enter Email'} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                component={'p'}
                style={{
                  marginBottom: '20px',
                }}
              >
                Card Number
              </Typography>
              <TextField
                fullWidth
                variant={'outlined'}
                label={'Enter Card Number'}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography
                component={'p'}
                style={{
                  marginBottom: '20px',
                }}
              >
                Expiration Date
              </Typography>
              <TextField
                fullWidth
                variant={'outlined'}
                label={'Enter Expiration Date'}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography
                component={'p'}
                style={{
                  marginBottom: '20px',
                }}
              >
                CVV
              </Typography>
              <TextField fullWidth variant={'outlined'} label={'Enter CVV'} />
            </Grid>
            <Grid item xs={6}>
              <Button color="primary" variant="contained">
                Add Card
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}
