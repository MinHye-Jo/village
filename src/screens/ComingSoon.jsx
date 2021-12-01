import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function ComingSoon() {
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
        <div className="comingSoonTitle">
          <span> Coming Soon..</span>
          <br />
          <img src="img/Charles.png" alt="coming soon" />
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
