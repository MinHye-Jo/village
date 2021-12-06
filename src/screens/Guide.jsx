import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function Guide() {
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
        <div className="contentsTitle">Guide</div>
        <div className="guideWrap">
          <div className="row left">
            <div className="guideTitle">
              <div className="guideName">
                <span>01</span>
                <br />
                There is no purchase limit per wallet.
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="guideTitle">
              <div className="guideName">
                <span>02</span>
                <br />
                You can buy one at a time.
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="guideTitle">
              <div className="guideName">
                <span>03</span>
                <br />
                Copy both the "Amount" and the "Address" then paste the "Amount" and "Address" to your Yoroi or Daedalus
                wallet.
              </div>
            </div>
            <br />
            <div className="guideImg">
              <img src="/img/guide3.jpg" alt="guide"></img>
            </div>
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default Guide;
