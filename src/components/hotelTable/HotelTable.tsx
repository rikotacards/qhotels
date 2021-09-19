import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { HotelRow, HotelRowProps, useGridStyles } from '../hotelRow/HotelRow';
import { hotelsData } from '../../fixtures/hotels.data'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1)
  }
}))

export const HotelTable: React.FC = () => {
  const gridClasses = useGridStyles();
  const classes = useStyles();

  const rows = hotelsData.map((row: HotelRowProps, i) => {
    if (i === 0) {
      return
    }
    return <HotelRow {...row}/>
  })
  return (
    <div >
      {rows}
    </div>
  )
}