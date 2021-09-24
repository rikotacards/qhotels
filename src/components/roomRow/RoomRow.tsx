import React from 'react';
import { Theme, makeStyles, Typography, Card, CardContent } from '@material-ui/core';
import { Room } from '../hotelRow/HotelRowStacked';

const useStyles = makeStyles((theme: Theme) => ({
  labelValueContainer: {
    display: 'flex'
  },
  pricePaxContainer: {
    display: 'flex'
  },
  value: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  spaceRight: {
    marginLeft: theme.spacing(1)
  },
  card: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5)
  }
}))

interface RoomRowProps {
  room: Room;
}

export const RoomRow: React.FC<RoomRowProps> = ({ room }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={0} variant='outlined'>
    
      <div className={classes.pricePaxContainer}>
        <div className={classes.labelValueContainer}>
          <Typography>
            Price (HKD):
          </Typography>
          <Typography className={classes.value}>
            {room.price}
          </Typography>
        </div>
        <div className={classes.labelValueContainer}>
          <Typography>
            pax:
          </Typography>
          <Typography className={classes.value}>
            {room.pax}
          </Typography>
        </div>
      </div>
      {room.area !== undefined && <div className={classes.labelValueContainer}>
        <Typography>
          area (sqm):
        </Typography>
        <Typography className={classes.value}>
          {room.area || 'Not provided'}
        </Typography>
      </div>}
      {room.info !== undefined && <div className={classes.labelValueContainer}>
        <Typography>Info:</Typography>
        <Typography className={classes.value}>{room.info}</Typography>
      </div>}
      
    </Card>

  )
}