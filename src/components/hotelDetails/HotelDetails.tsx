import React from 'react';
import { makeStyles, Theme, Typography, Divider, Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  pricingDetails: {
    marginBottom: theme.spacing(0.5)
  },
  priceValue: {
    marginLeft: theme.spacing(1)
  },
  childPolicyDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    marginBottom: theme.spacing(1)
  }
}))

interface HotelDetailsProps {
  suiteDetails: string;
  nonSuiteDetails: string;
  childrenPolicy: string;
}

interface NewLineTextProps {
  text?: string
}
export const NewLineText: React.FC<NewLineTextProps> = (props) => {
  const { text } = props;
  const classes = useStyles()
  const lines = text?.split('\n').map((line) => {
    if (line.indexOf('HK$') > -1 || line.indexOf('$') > -1) {
      return (
        <Typography className={classes.priceValue} variant='body1'>{line}</Typography>
      )
    }
    return (
      <Typography className={classes.pricingDetails} color='primary' variant='body1'>{line}</Typography>
    )

  })

  return (
    <>
      {lines}
    </>
  )

}

export const HotelDetails: React.FC<HotelDetailsProps> = (props) => {
  const { suiteDetails, nonSuiteDetails, childrenPolicy } = props;
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card} elevation={4} variant='outlined'>
        <CardContent>
          <Typography variant='body1'>
            Suite
          </Typography>
          <Typography variant='caption'>
            Proposed Room Rate per Night for
            Quarantine Guests (full board price
            and all inclusive)(HK$)
      </Typography>
          <Divider />

          <NewLineText text={suiteDetails} />
        </CardContent>
      </Card>
      <Card className={classes.card} elevation={4} variant='outlined'>
        <CardContent>
          <Typography variant='body1'>
            Non-suite
          </Typography>
          <Typography variant='caption'>
            Proposed Room Rate per Night for Quarantine Guests (full board price and
            all inclusive)(HK$)
      </Typography>
          <Divider />
          <NewLineText text={nonSuiteDetails} />
        </CardContent>
      </Card>
      <Card className={classes.card} variant='outlined'>
        <CardContent>
          <Typography>
            Under 18 Children Policy
        </Typography>
          <div className={classes.childPolicyDetails}>
            <Typography variant='caption'>
              (a) Under 12 years old
        </Typography>
            <Typography variant='caption'>
              (b) 12 - 16 years old
        </Typography>
            <Typography variant='caption'>
              (c) 16 - 18 years old
        </Typography>
          </div>
          <Divider />
          <NewLineText text={childrenPolicy} />
        </CardContent>
      </Card>
    </div>
  )
}