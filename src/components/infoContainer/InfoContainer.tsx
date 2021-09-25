import React from 'react';
import { makeStyles, Typography, Theme, Button } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { HotelRowProps } from '../hotelRow/HotelRowStacked';
const useStyles = makeStyles((theme: Theme) => ({
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
  },
  horizontal: {
    display: 'flex',
    marginBottom: theme.spacing(1)
  },
  detailsLayout: {
    display: 'flex',
    flexDirection: 'column'
  },
  roomDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1)
  },
  reviewsContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  reviewButton: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textTransform: 'capitalize'
  },
  rowContainer: {
    display: 'flex',
    width: '100%',
  },
  locationDetails: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  district: {
    width: '80px'
  },
  column: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  address: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    maxWidth: '100px'
  },
  button: {
    textTransform: 'capitalize'
  },
  colLabel: {
    // fontWeight: 'bold'
  },
  details: {
    margin: theme.spacing(1)
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1)
  },
  addressIconContainer: {
    marginBottom: theme.spacing(1),
    alignItems: 'flex-start',
    maxWidth: '200px',
    display: 'flex'
  },
  nameRatingContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  buttonText: {
    textOverflow: 'elipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  infoContainer: {
    marginLeft: theme.spacing(1)
  },
  marginBottom: {
    marginBottom: theme.spacing(1)
  }
}))


export const InfoContainer: React.FC<HotelRowProps> = ({ email, phone, address, location, rooms, facebookReviews, tripAdvisorReviews }) => {
  const roomSorted = rooms.sort((a,b) => a.price - b.price)
  const minPrice = roomSorted[0].price;
  const maxPrice = roomSorted[roomSorted.length-1].price;
  const classes = useStyles()
  return (
    <>
      <div className={classes.iconTextContainer}>
        <MonetizationOnIcon className={classes.icon} fontSize='small' color='primary' />
        <Typography variant='body1'>{`${minPrice}-${maxPrice}`}</Typography>
      </div>
      <div className={classes.iconTextContainer}>
        <EmailIcon className={classes.icon} fontSize='small' color='primary' />
        <Typography variant='body1'>{email.split(' ').join('')}</Typography>
      </div>
      <div className={classes.iconTextContainer}>
        <PhoneIcon className={classes.icon} color='primary' fontSize='small' />
        <Typography variant='body1'>{phone}</Typography>
      </div>
      <div className={classes.addressIconContainer}>
        <LocationOnIcon fontSize='small' color='primary' className={classes.icon} />
        <div>
          <Typography variant='body1'>{address}</Typography>
          <Typography variant='caption'>{location}</Typography>
        </div>
      </div>
      <div className={classes.reviewsContainer}>
        <div className={classes.iconTextContainer}>
          <RateReviewIcon className={classes.icon} fontSize='small' color='primary' />
          <div>
          <Button disabled={!facebookReviews} size='small' fullWidth className={classes.reviewButton} variant='outlined' target='_blank' href={facebookReviews || ""}>
            <Typography variant='body1'>{!facebookReviews ? 'No Fb Reviews' : 'Facebook Reviews'}</Typography>
          </Button>
          <Button disabled={!tripAdvisorReviews} size='small' fullWidth className={classes.button} variant='outlined'target='_blank' href={tripAdvisorReviews || ""}>
            <Typography className={classes.buttonText} variant='body1'>{!tripAdvisorReviews ? 'No TripAdvisor Reviews': 'TripAdvisor Reviews'}</Typography></Button>
            </div>
        </div>
      </div>
    </>
  )
}