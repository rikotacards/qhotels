import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import StarIcon from '@material-ui/icons/Star';
import EmailIcon from '@material-ui/icons/Email';
import { Button, Card, CardContent, Chip, Collapse, makeStyles, Theme, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1)
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
    alignItems: 'center'
  }
}))

const gridAreaName = (name: string) => `${name}-start / ${name}-end`
export const useGridStyles = makeStyles((theme: Theme) => ({
  grid: {
    display: 'grid',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0.5),
    columnGap: theme.spacing(0.5),
    rowGap: theme.spacing(0.5),
  },
  name: {
    // margin: '40px'
    gridRow: gridAreaName('name'),
  },
  rating: {
    gridRow: gridAreaName('rating'),
  },
  row: {
    display: 'grid',
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
    'grid-template-columns': '[name-start] 1fr [rating-start] 50px  [phone-start] 100px [email-start] 1fr [fbReviews-start] 0.5fr [taReviews-start] 0.5fr [details-start] 0.5fr [details-end]'
  },
  district: {

    gridRow: gridAreaName('district')
  },
  reservationSite: {

    gridRow: gridAreaName('reservationSite')
  },
  phone: {

    gridRow: gridAreaName('phone')
  },
  email: {

    gridRow: gridAreaName('email')
  },
  fbReviews: {

    gridRow: gridAreaName('fbReviews')
  },
  taReviews: {

    gridRow: gridAreaName('taReviews')
  },
  details: {
    gridRow: gridAreaName('details')
  },
  buttonText: {
    textOverflow: 'elipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'

  }
}))

export interface HotelRowProps {
  name: string;
  location: string;
  address: string;
  reservationSite: string;
  phone: string | number;
  facebookReviews?: string;
  TripAdvisorReviews?: string;
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

export const HotelRow: React.FC<HotelRowProps> = (props) => {

  const [isOpen, setOpen] = React.useState<boolean>(false)
  const handleClick = () => {
    setOpen(!isOpen);
  }
  const { name, location, address, reservationSite, phone, facebookReviews, TripAdvisorReviews, email } = props;
  const classes = useStyles();
  const gridClasses = useGridStyles();
  return (
    <Card elevation={3} color='primary' className={classes.card}>
      <CardContent>
        <div className={gridClasses.row}>
          <div className={gridClasses.name}>
            <div>
              <Typography color='primary' className={classes.colLabel} variant='caption'>Name</Typography>
            </div>
            <div>
              <Button className={classes.button} size='small' href={reservationSite} target='_blank'>
                <Typography variant='body1'>{name}</Typography>
              </Button>
            </div>
          </div>
          <div className={gridClasses.rating}>
            {/* <div>
              <Typography color='primary' className={classes.colLabel} variant='caption'>Rating</Typography>
            </div> */}
            <div className={classes.iconTextContainer}>
              <StarIcon fontSize='small' color='primary' />
              <Typography variant='body1'>5/5</Typography>
            </div>
          </div>

          <div className={gridClasses.phone}>
            <div className={classes.iconTextContainer}>
              <PhoneIcon color='primary' fontSize='small' />

              <Typography variant='body1'>{phone}</Typography>
            </div>
          </div>
          <div className={gridClasses.email}>
            <div className={classes.iconTextContainer}>
              <EmailIcon fontSize='small' color='primary' />
              <Typography variant='body1'>{email}</Typography>
            </div>
          </div>

          <div className={gridClasses.fbReviews}>
            <div>
              <Typography color='primary' className={classes.colLabel} variant='caption'>Facebook</Typography>
            </div>
            <div>
              <Button size='small' className={classes.button} variant='outlined' target='_blank' href='https://www.facebook.com/groups/2788738214495345/search/?q=four%20points'>
                <Typography variant='caption'>Reviews</Typography>
              </Button>
            </div>
          </div>
          <div className={gridClasses.taReviews}>
            <div>
              <Typography color='primary' className={classes.colLabel} variant='caption'>Trip Advisor</Typography>
            </div>
            <div>
              <Button size='small' className={classes.button} variant='outlined'>
                <Typography className={gridClasses.buttonText} variant='caption'>Reviews</Typography></Button>
            </div>
          </div>
          <div className={gridClasses.details}>
            <div>
              <Typography className={classes.colLabel} color='primary' variant='caption'>Details</Typography>
            </div>
            <div>
              <Button size='small' onClick={handleClick} className={classes.button} variant='outlined'>
                <Typography variant='caption'>Details</Typography></Button>
            </div>
          </div>



        </div>
        <div className={classes.locationDetails}>
          <div>
            <div>
              <Typography color='primary' className={classes.colLabel} variant='caption'>District</Typography>
            </div>
            <div>
              <Chip size='small' label={location} />
            </div>
          </div>
          <div className={classes.address}>
            <div >
              <Typography color='primary' variant='caption'>Address</Typography>
            </div>
            <div>
              <Typography variant='caption'>{address}</Typography>
            </div>
          </div>
        </div>
        <Collapse in={isOpen}>
          <div className={classes.details}>
            prices
        </div>
        </Collapse>
      </CardContent>
    </Card>
  )
}