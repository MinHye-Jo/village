import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function ContinentalMap() {
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
      <div className="bgBlue">
        <div className="blueLine" />
        <div className="contentsTitle white">Continental Map</div>
        <img className="map2" src="img/map2.png" alt="Continental Map" />
        <div className="blank" />
      </div>
    </div>
  );
}

export default ContinentalMap;
