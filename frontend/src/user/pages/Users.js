import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "http://1.bp.blogspot.com/-NQoEzNaPUcI/TmRBeDEekhI/AAAAAAAAEPA/AqiDFR1vy78/s1600/red-flowers-x.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
