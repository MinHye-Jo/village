import React, { useState, useEffect } from "react";
import "../styles/css/index.scss";

function Index() {
  return (
    <div className="wrap">
      <div className="main">
        <div className="mainWrap">
          <div className="mainTitle">
            <div className="mainLogo"></div>
            <br />
            <span>Cardano</span>Village
            <div className="mainText">
              Metaverse came to Cardano.
              <br />
              Enjoy and explore this world.
            </div>
          </div>
        </div>

        <div className="mainBg">
          <div className="mainImgLeft" />
          <div className="mainImgRight" />
        </div>
      </div>
      <div className="contentsWrap">
        <div className="contentsTitle">
          <span> Welcome to </span>
          <br />
          Cardano Village
        </div>
        <div className="contnetsText">
          We make Cardano Village. <br />
          Be a member of this village. <br />
          Oh, there's our Charles. <br />
          Let's create a peaceful Cardano CNFT village.
          <br />
          <br />
          <span>Policy ID</span>
          <br />
          2c763e2db8337324df122fffa38e0d97ecdf53d139025a0e1b6d6b97
          <br />
        </div>
      </div>
      <div className="wrapGreen">
        <div className="greenLine" />
        <div className="contentsWrap">
          <div className="contentsTitle">
            <span>Introducing</span>
            <br />
            Cardano Village
          </div>
          <div className="contnetsText">
            There is no same house in Cardano Village.
            <br />
            Own a house only for you here.
            <br />
            Make up a village and a continent.
            <br />
            This world is a metaverse in Cardano.
            <br />
          </div>
          <div className="wrapCard">
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/CardanoVillageex1.png" alt="card" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/CardanoVillageex2.png" alt="card" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/CardanoVillageex3.png" alt="card" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/CardanoVillageex4.png" alt="card" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/CardanoVillageex5.png" alt="card" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
