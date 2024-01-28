import React from "react";
import { NavLink } from "react-router-dom";

const Art = () => {
  return (
    <div>
      <h1>My React Art</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/art">Art</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <p>This is my more complex React homepage.</p>
    </div>
  );
};

export default Art;