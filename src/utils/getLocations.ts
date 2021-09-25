import { HotelRowProps } from "../components/hotelRow/HotelRowStacked";

export const getLocations = (hotels: HotelRowProps[]): string[] => {
  const locations: {[key: string]: boolean}= {}
  const names: string[] = [];
   hotels.forEach((hotel) => {
     if(!locations[hotel.location]){
       locations[hotel.location] = true; 
      names.push(hotel.location);
     }
  })
  return names
  
}