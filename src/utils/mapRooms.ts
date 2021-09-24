import { Room } from "../components/hotelRow/HotelRowStacked";

// {isSuite: [], notSuite: []}

export type MappedRooms = {
  suite: {[key: string] : Room[]}
  nonSuite: {[key: string] : Room[]}
}

export const mapRooms = (rooms: Room[]): MappedRooms => {
  const roomsByName: MappedRooms = {
    suite: {

    },
    nonSuite: {

    }
  }; 
  rooms.forEach((room) => {
    if(room.isSuite){
      if(!room?.name){
        if(!roomsByName.suite['Standard']){
          roomsByName.suite['Standard'] = []
        }
        roomsByName.suite['Standard'].push(
          room
        )
        
      } else {
        if(!roomsByName.suite[room.name]){
          roomsByName.suite[room.name] = [];
        }
        roomsByName.suite[room.name].push(room)
      }
    } else {
      if(!room?.name){
        if(!roomsByName.nonSuite['standard']){
          roomsByName.nonSuite['standard'] = []
        }
        roomsByName.nonSuite['standard'].push(
          room
        )
        
      } else {
        if(!roomsByName.nonSuite[room.name]){
          roomsByName.nonSuite[room.name] = [];
        }
        roomsByName.nonSuite[room.name].push(room)
      }
    }
  })
  return roomsByName
}