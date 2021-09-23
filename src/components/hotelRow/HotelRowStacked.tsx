import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Button, Card, CardContent, Chip, Collapse, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { HotelDetails } from '../hotelDetails/HotelDetails';
const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1)
  },
  reviewsContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  reviewButton: {
    marginRight: theme.spacing(1),
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
    marginLeft: theme.spacing(1)
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
  nameRatingContainer: {
    display: 'flex',
    alignItems: 'center'
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
  }
}))

export interface Room {
  name?: string;
  pax: number;
  isSuite: boolean;
  info?: string;
  price: number;
  area?: number;
}

export interface HotelRowProps {
  name: string;
  location: string;
  address: string;
  reservationSite: string;
  phone: string | number;
  facebookReviews?: string;
  TripAdvisorReviews?: string;
  rooms: Room[];
  email: string;
  col8?: string | number;
  col9?: string | number;
  col10?: string;
  col11?: string | number;
  col12?: string;
  col13?: string;
  col14?: string;
  col15?: string;
  col16?: string;
}

export const HotelRowStacked: React.FC<HotelRowProps> = (props) => {

  const [isOpen, setOpen] = React.useState<boolean>(false)
  const handleClick = () => {
    setOpen(!isOpen);
  }
  const { name, location, address, reservationSite, phone, facebookReviews, TripAdvisorReviews, email } = props;
  const suiteDetails = props.col10;
  const nonSuiteDetails = props.col12;
  const childrenPolicy = props.col15;
  const classes = useStyles();
  return (
    <Card elevation={3} color='primary' className={classes.card}>
      <CardContent>
        <div className={classes.nameRatingContainer}>
          <Button className={classes.button} size='small' href={reservationSite} target='_blank'>
            <Typography  variant='h5' gutterBottom>{name}</Typography>
          </Button>
          <div className={classes.iconTextContainer}>
            <StarIcon className={classes.icon} color='primary' />
            <Typography variant='body1'>5/5</Typography>
          </div>
        </div>
        <div className={classes.infoContainer}>

        <div className={classes.iconTextContainer}>
          <MonetizationOnIcon className={classes.icon} fontSize='small' color='primary' />
          <Typography variant='body1'>{'400-1200'}</Typography>
        </div>
        <div className={classes.iconTextContainer}>
          <EmailIcon className={classes.icon} fontSize='small' color='primary' />
          <Typography variant='body1'>{email}</Typography>
        </div>


        <div className={classes.iconTextContainer}>
          <PhoneIcon className={classes.icon} color='primary' fontSize='small' />
          <Typography variant='body1'>{phone}</Typography>
        </div>
        <div className={classes.iconTextContainer}>
          <LocationOnIcon fontSize='small' color='primary' className={classes.icon} />
          <div>
            <Typography variant='body1'>{address}</Typography>
            <Typography variant='caption'>{location}</Typography>
          </div>
        </div>



        <div className={classes.reviewsContainer}>
          <div className={classes.iconTextContainer}>
            <RateReviewIcon className={classes.icon} fontSize='small' color='primary' />
            <Button size='small' className={classes.reviewButton} variant='outlined' target='_blank' href='https://www.facebook.com/groups/2788738214495345/search/?q=four%20points'>
              <Typography variant='caption'>Facebook Reviews</Typography>
            </Button>
            <Button size='small' className={classes.button} variant='outlined'>
              <Typography className={classes.buttonText} variant='caption'>Trip Advisor Reviews</Typography></Button>
          </div>
        </div>
        <div className={classes.iconTextContainer}>
          <ExpandMoreIcon color='primary' fontSize='small' className={classes.icon} />
          <Button
            onClick={handleClick}
            size='small'
            variant='outlined'
            className={classes.reviewButton}>
            <Typography variant='caption'>
              Expand for room pricing details
          </Typography>
          </Button>
        </div>

        <Collapse in={isOpen}>
         <HotelDetails suiteDetails={suiteDetails || ""} nonSuiteDetails={nonSuiteDetails || ""} childrenPolicy={childrenPolicy || ""}/>
        </Collapse>
        </div>
      </CardContent>
    </Card>
  )
}