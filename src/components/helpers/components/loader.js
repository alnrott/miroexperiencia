import React from "react";
import "./loader.css";

const BouncingBallLoader = () => {
  return (
    <div className="bouncing-ball-loader">
      <div className="mycanvas">
        <div className="container">
          <div className="ball"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default BouncingBallLoader;
