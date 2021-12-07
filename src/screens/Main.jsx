import React, { useState, useEffect, useRef } from "react";
import "../styles/css/index.scss";
import QrModal from "./components/QrModal";

import { collectionInfo, getAddress } from "../services/collection";

const dday = new Date("December 10, 2021, 13:00:00"); //디데이
// UTC 타입 현재 날짜 (고정)
const curr = new Date();
const today = new Date(curr.getTime() + curr.getTimezoneOffset() * 60 * 1000);

console.log(dday);
console.log(today);

function Main(props) {
  // 오픈 확인
  const [openFlag, setOpenFlag] = useState(false);

  // 팝업제어
  const [qrOpen, setQrOpen] = useState(false);
  const [qrData, setQrData] = useState(false);

  // 카운트 제어
  const [d, setD] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const countTimerRef = useRef();

  // 컬렉션 데이터
  const [containData, setContainData] = useState(0);

  // 품절 확인
  const [soldOut, setSoldOut] = useState(false);

  // 카운트 다운 인터벌 셋
  useEffect(() => {
    (async () => {
      counter();

      const { data } = await collectionInfo({ collectionId: 42 });
      if (data && data.return_code === 200) {
        console.log(data.response[0]);
        const res = data.response[0];
        if (res.openStatus == 6) {
          if (res.mintCount == res.targetQuantity) {
            setSoldOut(true);
          }
        }
        setContainData(data.response[0]);
      } else {
        alert("It's a wrong access.");
      }
    })();

    return function cleanup() {
      clearInterval(countTimerRef.current);
    };
  }, []);

  // 메인 카운트다운
  const counter = () => {
    countTimerRef.current = setInterval(function () {
      const curr = new Date();
      const now = new Date(curr.getTime() + curr.getTimezoneOffset() * 60 * 1000);

      const distance = dday.getTime() - now;

      if (distance <= 0) {
        setOpenFlag(true);
        clearInterval(countTimerRef.current);
        return;
      }

      setD(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setH(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setM(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setS(
        Math.floor((distance % (1000 * 60)) / 1000) < 10
          ? `0${Math.floor((distance % (1000 * 60)) / 1000)}`
          : Math.floor((distance % (1000 * 60)) / 1000),
      );
    }, 1000);
  };

  // 구매 버튼 클릭
  const getAddressAction = async () => {
    const { data } = await getAddress({ addrName: "village" });
    if (data && data.return_code === 200) {
      const addrData = { ...data.response[0], price: containData.nftPrice / 1000000 };
      setQrData(addrData);
      setQrOpen(true);
    } else {
      alert("It's a wrong access.");
    }
  };

  return (
    <div className="wrap">
      <QrModal data={qrData} open={qrOpen} onClose={() => setQrOpen(false)} />
      <div className="main">
        <div className="mainWrap">
          <div className="mainTitle">
            <div className="mainLogo"></div>
            <br />
            <span>Cardano</span>Village
            {!openFlag && (
              <div className="mainCount">
                <div className="countTitle titleWhite">COMING SOON</div>
                <div className="counter">
                  <div>
                    <span className="days" id="day">
                      {d}
                    </span>
                    <div className="smallText">Days</div>
                  </div>
                  <div>
                    <span className="hours" id="hour">
                      {h}
                    </span>
                    <div className="smallText">Hours</div>
                  </div>
                  <div>
                    <span className="minutes" id="minute">
                      {m}
                    </span>
                    <div className="smallText">Minutes</div>
                  </div>
                  <div>
                    <span className="seconds" id="second">
                      {s}
                    </span>
                    <div className="smallText">Seconds</div>
                  </div>
                </div>
                <div className="counterDate">December 10th 01PM (UTC)</div>
              </div>
            )}
            {openFlag && containData && containData.openStatus > 0 && (
              <div className="openWrap">
                {containData.openStatus == 5 || containData.openStatus == 6 ? (
                  <div className="openTitle">{containData.mintCount} Villages are sold.</div>
                ) : null}
                <div className="openSubtitle">
                  {containData.openStatus == 1 || containData.openStatus == 2 ? (
                    <span>0001~3000 : 35 ADA</span>
                  ) : (
                    "0001~3000 : 35 ADA"
                  )}{" "}
                  <br />
                  {containData.openStatus == 3 || containData.openStatus == 4 ? (
                    <span>3001~6000 : 40 ADA</span>
                  ) : (
                    "3001~6000 : 40 ADA"
                  )}{" "}
                  <br />
                  {containData.openStatus == 5 || containData.openStatus == 6 ? (
                    <span>6001~10000 : 45 ADA</span>
                  ) : (
                    "6001~10000 : 45 ADA"
                  )}{" "}
                  <br />
                </div>
                <br />
                {containData.openStatus % 2 == 1 ? (
                  containData.openStatus == 5 && soldOut ? (
                    <button className="btnPreparing">{"SoldOut"}</button>
                  ) : (
                    <button className="btnBuy" onClick={getAddressAction}>
                      Buy Now!
                    </button>
                  )
                ) : containData.openStatus != 6 ? (
                  <button className="btnPreparing"> "Preparing Open" </button>
                ) : (
                  <button className="btnPreparing">{soldOut ? "SoldOut" : "Closed"}</button>
                )}
              </div>
            )}
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

export default Main;
