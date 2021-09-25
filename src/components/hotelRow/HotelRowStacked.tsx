import React from 'react';
import clx from 'clsx'
import { Button, Card, CardContent, Divider, makeStyles, Theme, Typography } from '@material-ui/core';
import { HotelDetails } from '../hotelDetails/HotelDetails';
import { RoomDetails } from '../roomDetails/RoomDetails';
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { InfoContainer } from '../infoContainer/InfoContainer';
const useStyles = makeStyles((theme: Theme) => ({
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
  },
  horizontal: {
    display: 'flex',
    marginBottom: theme.spacing(1),
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  detailsLayout: {
    display: 'flex',
    flexGrow: 0

  },
  roomDetails: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    maxWidth: '450px',
    flexGrow: 1,
    // width: '100%'
  },
  reviewsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  reviewButton: {
    marginRight: theme.spacing(1),
    textTransform: 'capitalize'
  },

  button: {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center'
  },
  details: {
    margin: theme.spacing(1)
  },
  nameRatingContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  divider: {
    margin: theme.spacing(1, 0, 1, 0)
  },

  icon: {
    marginRight: theme.spacing(1)
  },
  marginBottom: {
    marginBottom: theme.spacing(1)
  },
  childPolicy: {
    display: 'flex',
    maxWidth: '300px',
    flexShrink: 2,
  },
  card: {
    margin: theme.spacing(0.5)
  },
  arrow: {
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
  tripAdvisorReviews?: string;
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

  console.log('rendered')
  const { name, reservationSite } = props;
  const suiteDetails = props.col10;
  const nonSuiteDetails = props.col12;
  const childrenPolicy = props.col15;
  const classes = useStyles();
  return (
    <Card elevation={3} color='primary' className={classes.marginBottom}>
      <CardContent className={classes.vertical}>
        <div className={classes.nameRatingContainer}>
          <Button className={classes.button} size='small' href={reservationSite} target='_blank'>
            <Typography variant='h5' >{name}</Typography>
            <ArrowForwardIosIcon className={classes.arrow} fontSize='small' color='primary' />
          </Button>

        </div>
        <div className={classes.horizontal}>
          <Card className={clx(classes.detailsLayout, classes.card)}>
            <CardContent>
              <div className={classes.horizontal}>
                <InfoIcon color='primary' className={classes.icon} />
                <Typography>Hotel Details</Typography>
              </div>
              <Divider className={classes.divider} />
              <InfoContainer {...props} />
            </CardContent>
          </Card>
          <Card className={clx(classes.card, classes.roomDetails)}>
            <CardContent>
              <RoomDetails rooms={props.rooms} />
            </CardContent>
          </Card>
          <Card className={clx(classes.card, classes.childPolicy)}>
            <CardContent>
              <HotelDetails suiteDetails={suiteDetails || ""} nonSuiteDetails={nonSuiteDetails || ""} childrenPolicy={childrenPolicy || ""} />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}