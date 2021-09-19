import { Card, Paper, Typography, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    border: '1px solid black',
    marginLeft: '10%',
    marginRight: '10%'
  }
}))

export const HotelProfile: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <Paper>
      <div>
        <Typography>Four Points</Typography>
      </div>
      <div>
        <Typography>Add Review</Typography>
      </div>
      <div>
        <Typography>Reviews from Facebook</Typography>
      </div>
      <div>
        <Card>
          review 1
        </Card>
      </div>
    </Paper>
    </div>
  )
}

//curl -H "X-CMC_PRO_API_KEY: e26c688b-139e-4ec3-9d13-22e461565be0" -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" -G https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
