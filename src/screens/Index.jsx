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
              Create, explore and trade in the
              <br />
              first-ever Cardano virtual world
              <br />
              owned by its users.
              <br />
              Our village is coming!
            </div>
          </div>
        </div>

        <div className="mainBg">
          <div className="mainImgLeft" />
          <div className="mainImgRight" />
        </div>
      </div>
      <div className="contentsWrap">
        <div className="contentsTitle">Welcome to our village!</div>
        <div className="contnetsText">
          The real universe comes to Cardano.
          <br />
          We issue the results of shooting real space, not graphics, to CNFT.
          <br />
          Our CNFT has a rarity.
          <br />
          Own a universe that no one can own.
          <br />
          <br />
          <span>CNFT PolicyID</span>
          <br />
          2c763e2db8337324df122fffa38e0d97ecdf53d139025a0e1b6d6b97
        </div>
      </div>
      <div className="wrapGreen">
        <div className="greenLine" />
        <div className="contentsWrap">
          <div className="contentsTitle">Introducing our village!</div>
          <div className="contnetsText">
            The real universe comes to Cardano.
            <br />
            We issue the results of shooting real space, not graphics, to CNFT.
            <br />
            Our CNFT has a rarity.
            <br />
            Own a universe that no one can own.
            <br />
          </div>
          <div className="wrapCard">
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/cardImg1.jpg" alt="card" />
                </div>
                <div className="cardName">Card Name</div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/cardImg1.jpg" alt="card" />
                </div>
                <div className="cardName">Card Name</div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/cardImg1.jpg" alt="card" />
                </div>
                <div className="cardName">Card NameCard Name</div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/cardImg1.jpg" alt="card" />
                </div>
                <div className="cardName">Card Name</div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="cardImg">
                  <img src="/img/cardImg1.jpg" alt="card" />
                </div>
                <div className="cardName">Card Name</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
