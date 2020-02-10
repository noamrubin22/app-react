import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map(user => {
        return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} place={user.place} placeCount={user.places}/>;
      })}
    </ul>
  );
};

export default UsersList;