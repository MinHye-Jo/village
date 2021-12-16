import React, { useState, useEffect, useRef } from "react";
import "../styles/css/subpageTop.scss";
import QrModal from "./components/QrModal";
import { getAddress } from "../services/collection";

function EventChristmas() {
  // 팝업제어
  const [qrOpen, setQrOpen] = useState(false);
  const [qrData, setQrData] = useState(false);
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
  // 컬렉션 데이터
  const [containData] = useState(0);

  const dday = new Date("December 23, 2021, 13:00:00"); //디데이
  // UTC 타입 현재 날짜 (고정)
  const curr = new Date();
  const today = new Date(curr.getTime() + curr.getTimezoneOffset() * 60 * 1000);

  console.log(dday);
  console.log(today);
  // 카운트 제어
  const [d, setD] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const countTimerRef = useRef();
  // 코인 리스트 조회
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

      if (distance <= 0) {
        clearInterval(countTimerRef.current);
        return;
      }

      setD(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setH(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setM(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setS(
        Math.floor((distance % (1000 * 60)) / 1000) < 10
          ? `0${Math.floor((distance % (1000 * 60)) / 1000)}`
          : Math.floor((distance % (1000 * 60)) / 1000)
      );
    }, 1000);
  };

  return (
    <div className="wrap">
      <QrModal data={qrData} open={qrOpen} onClose={() => setQrOpen(false)} />
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
        <div className="eventWrap">
          <div className="contentsTitle event">Christmas Event</div>
          <div className="row half">
            <div className="eventText">
              <b>Merry Xmas! Let's enjoy it together.</b> <br />
              <br />
              It is minted in two ways. <br />
              <div className="ee2">
                a) 3ada
                <br />
                b) 2ada + 100 million Hosky tokens.
              </div>
              <br />
              Minting , purchase mount : no limit.
              <br />
              <br />
              <div className="ee">
                <b>policy ID </b>
                <br />
                18f59066d205b9ffc4208d9b6cfad2dbdee84dc4a0097e0b9de7db26
              </div>
            </div>
          </div>
          <br />
          <div className="row half">
            <div className="eventText">
              <div className="emainCount">
                <div className="ecountTitle titleWhite">Close at</div>
                <div className="ecounterDate">December 10th 01PM (UTC)</div>
                <div className="ecounter">
                  <div>
                    <span className="edays" id="day">
                      {d}
                    </span>
                    <div className="esmallText">Days</div>
                  </div>
                  <div>
                    <span className="ehours" id="hour">
                      {h}
                    </span>
                    <div className="esmallText">Hours</div>
                  </div>
                  <div>
                    <span className="eminutes" id="minute">
                      {m}
                    </span>
                    <div className="esmallText">Minutes</div>
                  </div>
                  <div>
                    <span className="eseconds" id="second">
                      {s}
                    </span>
                    <div className="esmallText">Seconds</div>
                  </div>
                </div>
              </div>
              <button className="btnEvent" onClick={getAddressAction}>
                BUY NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapDeepGreen">
        <div className="greenLine" />
        <div className="contentsWrap">
          <div className="contentsTitle">Christmas Collection</div>
          <div className="row">
            <div className="wrapEvent">
              <div className="event">
                <div className="eventDetailTitle">Merry Xmas #1</div>
                <div className="eventArea area60">
                  <div className="eventImgWrap">
                    <div className="eventImg">
                      <img
                        src="/img/MerryXmass.gif"
                        alt="collection"
                        oncontextmenu="return false"
                        ondragstart="return false"
                        onselectstart="return false"
                      />
                    </div>
                  </div>
                </div>
                <div className="eventArea area40">
                  <div className="eventDetailText">
                    <div className="eventDetailSubtitle">
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Continent</div>
                          <div className="value">Byron</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Village</div>
                          <div className="value">Charles</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Village Number</div>
                          <div className="value">6024</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">time</div>
                          <div className="value">Noon</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Tree Color</div>
                          <div className="value">Yellow</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapEvent">
              <div className="event">
                <div className="eventDetailTitle">Merry Xmas #2</div>
                <div className="eventArea area60">
                  <div className="eventImgWrap">
                    <div className="eventImg">
                      <img
                        src="/img/Xmas-Tired.gif"
                        alt="collection"
                        oncontextmenu="return false"
                        ondragstart="return false"
                        onselectstart="return false"
                      />
                    </div>
                  </div>
                </div>
                <div className="eventArea area40">
                  <div className="eventDetailText">
                    <div className="eventDetailSubtitle">
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Continent</div>
                          <div className="value">Byron</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Village</div>
                          <div className="value">Charles</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Village Number</div>
                          <div className="value">6024</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">time</div>
                          <div className="value">Noon</div>
                        </div>
                      </div>
                      <div className="row half">
                        <div className="boxGreen">
                          <div className="title">Tree Color</div>
                          <div className="value">Yellow</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default EventChristmas;
