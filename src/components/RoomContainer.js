import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
//import { RoomConsumer } from "../context";
import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  } else {
    return (
      <React.Fragment>
        <RoomFilter rooms={rooms}></RoomFilter>
        <RoomList rooms={sortedRooms}></RoomList>
      </React.Fragment>
    );
  }
}

export default withRoomConsumer(RoomContainer);

/*export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        //console.log(value);
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        } else {
          return (
            <div>
              hello from rooms container
              <RoomFilter rooms={rooms}></RoomFilter>
              <RoomList rooms={sortedRooms}></RoomList>
            </div>
          );
        }
      }}
    </RoomConsumer>
  );
}*/
