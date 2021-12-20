import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function VillageMap() {
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
        <div className="contentsTitle">Village Map</div>
        <div className="mapWrap">
          <div className="row half">
            <img src="/img/map1.png" className="map1" alt="map" />
          </div>
          <div className="row half">
            <div className="mapText">
              · Description of the continent.
              <br />
              · Description of the village.
              <br />· Whoever owns a house can own the land.
            </div>
          </div>
        </div>
        <div className="blank" />
        <div className="wrapMap">
          <div className="half3">
            <img src="../img/villageMap1.png" alt="villageMap" />
            <div className="mapName">
              <span>01</span>
              <br />
              · You can register your own nft.
              <br />
              · You can register your own nft.
              <br />
              · You can register your own nft.
              <br />· You can register your own nft.
            </div>
          </div>
          <div className="half3">
            <img src="../img/villageMap2.png" alt="villageMap" />
            <div className="mapName">
              <span>02</span>
              <br />
              · You can display nft.
              <br />
              · You can also display your own drawings.
              <br />
              · You can display nft.
              <br />· You can also display your own drawings.
            </div>
          </div>
          <div className="half3">
            <img src="../img/villageMap3.png" alt="villageMap" />
            <div className="mapName">
              <span>03</span>
              <br />
              · A community is formed when one condition is met.
              <br />· A community is formed when one condition is met.
            </div>
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default VillageMap;
