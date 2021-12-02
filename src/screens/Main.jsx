import React, { useState, useEffect, useRef } from "react";
import "../styles/css/index.scss";

const dday = new Date("Decemver 10, 2021, 13:00:00"); //디데이
// UTC 타입 현재 날짜 (고정)
const curr = new Date();
const today = new Date(curr.getTime() + curr.getTimezoneOffset() * 60 * 1000);

console.log(dday);
console.log(today);

function Main(props) {
  // 카운트 제어
  const [d, setD] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const countTimerRef = useRef();

  // 카운트 다운 인터벌 셋
  useEffect(() => {
    (async () => {
      counter();
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

  // 컬렉션 날짜 체크
  const detailOpenChk = (dateVal, type, val) => {
    const startDate = new Date(dateVal.startDate.replace(/-/g, "/"));
    const endDate = new Date(dateVal.endDate.replace(/-/g, "/"));

    if (type === "box") {
      if (startDate < today) {
        if (endDate < today) {
          return <div className="redBox">Close</div>;
        } else return <div className="blueBox">Proceeding</div>;
      } else {
        return <div className="greyBox">Getting Ready</div>;
      }
    }

    if (type === "ada") {
      const amount = val.highstBidPrice === 0 ? "BID" : `${val.highstBidPrice / 1000000}ADA`;

      if (startDate < today) {
        if (endDate < today) {
          return (
            <div className="adaBox" style={{ color: "#ff4747" }}>
              {amount}
            </div>
          );
        } else
          return (
            <div className="adaBox" style={{ color: "#0056ff" }}>
              {amount}
            </div>
          );
      }
    }
  };

  return (
    <div className="wrap">
      <div className="main">
        <div className="mainWrap">
          <div className="mainTitle">
            <div className="mainLogo"></div>
            <br />
            <span>Cardano</span>Village
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
