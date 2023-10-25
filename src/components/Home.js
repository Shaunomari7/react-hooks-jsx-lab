import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const divStyle = {
    color: 'firebrick'
  }
  return (
    <div id="home">
      <h1 style={divStyle}>
        {name} is a web developer from {city}
      </h1>

    </div>

  );
  
}

export default Home;
