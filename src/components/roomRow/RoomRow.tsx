import React from 'react';
import { Theme, makeStyles, Typography, Card, Divider } from '@material-ui/core';
import { Room } from '../hotelRow/HotelRowStacked';
import clx from 'clsx';
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
  },
  matched: {
    backgroundColor: '#33eb91',
  }
}))

interface RoomRowProps {
  room: Room;
  minInt?: number;
  maxInt?: number;
}

export const RoomRow: React.FC<RoomRowProps> = ({ room, maxInt, minInt }) => {
  const matched = (maxInt !== undefined && minInt !== undefined) ? (room.price <= maxInt && room.price >= minInt) : false
  const classes = useStyles();
  return (
    <Card className={clx(classes.card, matched && classes.matched)} elevation={0} variant='outlined'>
    
      <div className={classes.pricePaxContainer}>
        <div className={classes.labelValueContainer}>
          <Typography>
            Price:
          </Typography>
          <Typography className={classes.value}>
            ${room.price}
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
        <Divider/>
        <Typography variant='caption'>{room.info}</Typography>
      </div>}
      
    </Card>

  )
}