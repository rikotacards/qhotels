import { Typography, Theme, makeStyles, Card, Divider } from '@material-ui/core';
import React from 'react';
import { mapRooms } from '../../utils/mapRooms';
import { Room } from '../hotelRow/HotelRowStacked';
import { RoomRow } from '../roomRow/RoomRow';
import HomeIcon from '@material-ui/icons/Home';
import { isMobile } from '../../platform/platform';
interface RoomDetailsProps {
  rooms: Room[];
  minInt?: number;
  maxInt?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: isMobile()  ? 'column' : 'row'
  },
  rooms: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  roomName: {
    textTransform: 'capitalize'
  },
  homeTextContainer: {
    display: 'flex'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  matchedSearch: {
    backgroundColor: 'green',
  }
}))


export const RoomDetails: React.FC<RoomDetailsProps> = ({ rooms, minInt, maxInt }) => {
  const { suite, nonSuite } = mapRooms(rooms);
  const suiteRoomNames = Object.keys(suite);
  const classes = useStyles();
  const nonSuiteRoomNames = Object.keys(nonSuite);
  return (
    <>
    <div className={classes.homeTextContainer}>
      <HomeIcon className={classes.icon} color ='primary'/>
      <Typography>Room Details (in HKD)</Typography>
    </div>
    <Divider className={classes.divider}/>
      <div className={classes.container}>
        {suiteRoomNames.length > 0 && <div className={classes.rooms}>
          <Typography className={classes.roomName}>Suite</Typography>
          <div>
            {
              suiteRoomNames.map((name) => {
                return (
                  <Card className={classes.card}>
                    <Typography>{name}</Typography>
                    {suite[name].map((room) => {
                      return (
                        <RoomRow minInt={minInt} maxInt={maxInt} room={room} />
                      )
                    })}

                  </Card>
                )
              })
            }

          </div>


        </div>}
        {nonSuiteRoomNames.length > 0 && <div className={classes.rooms}>
          <Typography>Non Suite</Typography>
          <div>
            {
              nonSuiteRoomNames.map((name) => {
                return (
                  <Card className={classes.card}>
                    <Typography>{name}</Typography>
                    {nonSuite[name].map((room) => {
                      return (
                        <RoomRow minInt={minInt} maxInt={maxInt} room={room} />
                      )
                    })}

                  </Card>
                )
              })
            }
          </div>
        </div>}
      </div>
    </>
  )
}