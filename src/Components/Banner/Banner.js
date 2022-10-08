import "./banner.css";
import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem reprehenderit molestias expedita sequi ipsum hic in itaque, obcaecati quisquam veritatis aliquid at?
        
      </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
