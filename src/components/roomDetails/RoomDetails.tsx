import classes from '*.module.css';
import { Typography, Theme, makeStyles, Card } from '@material-ui/core';
import React from 'react';
import { mapRooms } from '../../utils/mapRooms';
import { Room } from '../hotelRow/HotelRowStacked';
import { RoomRow } from '../roomRow/RoomRow';
import HomeIcon from '@material-ui/icons/Home';
// import BedroomParentIcon from '@mui/icons-material/BedroomParent';
interface RoomDetailsProps {
  rooms: Room[];
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex'
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
  }
}))


export const RoomDetails: React.FC<RoomDetailsProps> = ({ rooms }) => {
  const { suite, nonSuite } = mapRooms(rooms);
  const suiteRoomNames = Object.keys(suite);
  const classes = useStyles();
  const nonSuiteRoomNames = Object.keys(nonSuite);
  return (
    <>
    <div className={classes.homeTextContainer}>
      <HomeIcon className={classes.icon} color ='primary' fontSize='small'/>
      <Typography>Room Details</Typography>
    </div>
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
                        <RoomRow room={room} />
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
                        <RoomRow room={room} />
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