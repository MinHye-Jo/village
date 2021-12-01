import React, { useState, useEffect } from "react";
import QrModal from "./components/QrModal";
import "../styles/css/index.scss";

function MainOpen2st() {
  // 팝업제어
  const [qrOpen, setQrOpen] = useState(false);
  return (
    <div className="wrap">
      <QrModal open={qrOpen} onClose={() => setQrOpen(false)} />
      <div className="main">
        <div className="mainWrap">
          <div className="mainTitle">
            <div className="mainLogo"></div>
            <br />
            <span>Cardano</span>Village
            <div className="openWrap">
              <div className="openTitle">4400 Villages are sold.</div>
              <div className="openSubtitle">
                0001~3000 : 35 ADA
                <br />
                <span>3001~6000 : 40 ADA</span>
                <br />
                6001~10000 : 45 ADA
                <br />
              </div>
              <br />
              <button className="btnBuy" onClick={() => setQrOpen(true)}>
                Buy Now!
              </button>
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
          <div>2c763e2db8337324df122fffa38e0d97ecdf53d139025a0e1b6d6b97</div>
          <br />
        </div>
        <div className="blank" />
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
                <div className="collectionImg">
                  <div className="example" />
                  <img src="/img/village1.png" alt="collection" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="collectionImg">
                  <div className="example" />
                  <img src="/img/village2.png" alt="collection" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="collectionImg">
                  <div className="example" />
                  <img src="/img/village3.png" alt="collection" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="collectionImg">
                  <div className="example" />
                  <img src="/img/village4.png" alt="collection" />
                </div>
              </button>
            </div>
            <div className="cardArea">
              <button>
                <div className="collectionImg">
                  <div className="example" />
                  <img src="/img/village5.png" alt="collection" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default MainOpen2st;