import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { HotelRowProps, HotelRowStacked } from '../hotelRow/HotelRowStacked';

interface HotelRowsContainerProps {
  rooms: HotelRowProps[];
  minInt?: number;
  maxInt?: number;
}

const HotelRowsContainer: React.FC<HotelRowsContainerProps> = ({ rooms, minInt, maxInt }) => {
  const rows = rooms.map((row: HotelRowProps, i) => {
   
    return <HotelRowStacked minInt={minInt} maxInt={maxInt} key={row.name} {...row} />
  })

  return (
    <>
      {rows.length > 0 ? rows : (<Card>
        <CardContent>
          <Typography>No hotels pertaining to your filters</Typography>
          <Typography>Try adjusting your filters</Typography>
        </CardContent></Card>)}
    </>
  )
}
export const HotelRowsContainerMemo = React.memo(HotelRowsContainer);