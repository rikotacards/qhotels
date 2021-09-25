import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { HotelRowProps, HotelRowStacked, Room } from '../hotelRow/HotelRowStacked';

interface HotelRowsContainerProps {
  rooms: HotelRowProps[]
}

const HotelRowsContainer: React.FC<HotelRowsContainerProps> = ({ rooms }) => {
  const rows = rooms.map((row: HotelRowProps, i) => {
   
    return <HotelRowStacked key={row.name} {...row} />
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