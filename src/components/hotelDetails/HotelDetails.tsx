import React from 'react';
import { makeStyles, Theme, Typography, Divider, Card, CardContent } from '@material-ui/core'
import ChildFriendlyIcon from '@material-ui/icons//ChildFriendly';
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
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(1),
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

    return (
      <Typography className={classes.pricingDetails} variant='body1'>{line}</Typography>
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
      <div className={classes.iconTextContainer}>
      <ChildFriendlyIcon color='primary' className={classes.icon}/>
      <Typography>
        Under - 18 Children Policy
        </Typography>
        </div>
        <Divider className={classes.divider}/>
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
          <Divider className={classes.divider} />
          <NewLineText text={childrenPolicy} />
    </div>
  )
}