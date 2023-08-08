import React from "react";
import WhatsHappening from "../whats-happening";
import TuitsList from "../tuits/tuits-list";

const HomeScreen = () => {
  return (
    <div>
      {currentUser === undefined || currentUser === null ? (
        <h1> Please login first! </h1>
      ) : (
        <>
          <h4>Home</h4>
          <WhatsHappening />
          <TuitsList />
        </>
      )}
    </div>
  );
};
export default HomeScreen;
