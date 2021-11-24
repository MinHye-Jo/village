import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function Roadmap() {
  return (
    <div className="wrap">
      <div className="sub">
        <div className="subWrap">
          <div className="subTitle">
            <span>Cardano</span>Village
            <div className="subText">
              Metaverse came to Cardano.
              <br />
              Enjoy and explore this world.
            </div>
          </div>
        </div>

        <div className="subBg">
          <div className="subLeft" />
          <div className="subRight" />
        </div>
      </div>
      <div className="wrapBlue">
        <div className="blueLine"></div>

        <img className="roadmap" src="img/roadmap.png" />
      </div>
    </div>
  );
}

export default Roadmap;
