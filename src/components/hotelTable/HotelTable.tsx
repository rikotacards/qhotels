import React from 'react';
import { HotelRowStacked, HotelRowProps } from '../hotelRow/HotelRowStacked';
import { hotelsData } from '../../fixtures/hotelsNew.data'
import { Button, makeStyles, MenuItem, Select, Theme, Typography } from '@material-ui/core';
import { districts } from '../../fixtures/districts.data';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  selectContainer: {
    margin: theme.spacing(1)
  },
  totalHotels: {
    marginLeft: theme.spacing(1)
  }
}))

export const HotelTable: React.FC = () => {
  const [location, setLocation] = React.useState('');
  const classes = useStyles();
  const clearFilter = () => {
    setLocation('')
  }

  const handleChange = (event: any) => {
    setLocation(event.target.value);
  };

  const filteredData = hotelsData.filter((hotel) => hotel.location === location)
  const hotelRows = location !== '' ? filteredData : hotelsData
  const totalHotels = hotelRows.length;
  const rows = hotelRows.map((row: HotelRowProps, i) => {
    if (i === 0) {
      return
    }
    return <HotelRowStacked {...row} />
  })
  return (
    <div >
      <Typography className={classes.totalHotels}>Selected Hotels {totalHotels}</Typography>
      <Select
      displayEmpty
      renderValue={() => location || 'Filter by location'}
      className={classes.selectContainer}
        variant='standard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={location}
        label="Districts"
        autoWidth
        placeholder="Districts"
        onChange={handleChange}
      >
        {districts.map((district) => {
          return (
            <MenuItem value={district}>{district}</MenuItem>
          )
        })}
      </Select>
      <Button onClick={clearFilter} variant='outlined'>clear filter</Button>
      {rows}
    </div>
  )
}