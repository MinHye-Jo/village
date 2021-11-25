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
      <div className="contentsWrap">
        <div className="contentsTitle">Continental Map</div>
        <img className="map1" src="img/map1.png" />
      </div>
      <div className="bgBlue">
        <img className="map2" src="img/map2.png" />
      </div>
    </div>
  );
}

export default ContinentalMap;
