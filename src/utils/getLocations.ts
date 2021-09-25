import { HotelRowProps } from "../components/hotelRow/HotelRowStacked";

export const getLocations = (hotels: HotelRowProps[]): string[] => {
  const locations: {[key: string]: boolean}= {}
  const names: string[] = [];
   hotels.forEach((hotel) => {
     if(!locations[hotel.subway]){
       locations[hotel.subway] = true; 
      names.push(hotel.subway);
     }
  })
  return names.sort()
  
}