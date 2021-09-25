import React from 'react'; 
import { HotelRowProps, HotelRowStacked, Room } from '../hotelRow/HotelRowStacked';

interface HotelRowsContainerProps {
  rooms: HotelRowProps[]
}

 const HotelRowsContainer: React.FC<HotelRowsContainerProps> = ({rooms}) => {
  const rows = rooms.map((row: HotelRowProps, i) => {
    if (i === 0) {
      return
    }
    return <HotelRowStacked key={row.name} {...row} />
  })
  
  return (
    <>
    {rows}
    </>
  )
}
export const HotelRowsContainerMemo = React.memo(HotelRowsContainer);