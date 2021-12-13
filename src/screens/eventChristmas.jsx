import React, { useState, useEffect, useRef } from "react";
import "../styles/css/subpageTop.scss";
import QrModal from "./components/QrModal";

function eventChristmas() {
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
        <div className="contentsTitle event">Christmas Event</div>
        <div className="eventWrap">
          <div className="row half">
            <img src="/img/christmasEvent.gif" alt="event" />
          </div>
          <div className="row half">
            <div className="eventText">
              Milestones will continue to develop and present visions.
              <br />
              Our team is also researching the CNFT exchange and GAME.
              <br />
              <br />
              <span>
                Please pay attention to this project.
                <br />
                We are moving toward the future with this project.
              </span>
              <br />
              <br />
              <button className="btnEvent">BUY NOW!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapDeepGreen">
        <div className="greenLine" />
        <div className="contentsWrap">
          <div className="contentsTitle">Christmas Collection</div>
          <div className="wrapEvent">
            <div className="eventArea">
              <button>
                <div className="eventImg">
                  <img
                    src="/img/ChristmasEvent.gif"
                    alt="event"
                    oncontextmenu="return false"
                    ondragstart="return false"
                    onselectstart="return false"
                  />
                </div>
              </button>
            </div>
            <div className="eventArea">
              <button>
                <div className="eventImg">
                  <img
                    src="/img/ChristmasEvent.gif"
                    alt="event"
                    oncontextmenu="return false"
                    ondragstart="return false"
                    onselectstart="return false"
                  />
                </div>
              </button>
            </div>
            <div className="eventArea">
              <button>
                <div className="eventImg">
                  <img
                    src="/img/ChristmasEvent.gif"
                    alt="event"
                    oncontextmenu="return false"
                    ondragstart="return false"
                    onselectstart="return false"
                  />
                </div>
              </button>
            </div>
            <div className="eventArea">
              <button>
                <div className="eventImg">
                  <img
                    src="/img/ChristmasEvent.gif"
                    alt="event"
                    oncontextmenu="return false"
                    ondragstart="return false"
                    onselectstart="return false"
                  />
                </div>
              </button>
            </div>
            <div className="eventArea">
              <button>
                <div className="eventImg">
                  <img
                    src="/img/ChristmasEvent.gif"
                    alt="event"
                    oncontextmenu="return false"
                    ondragstart="return false"
                    onselectstart="return false"
                  />
                </div>
              </button>
            </div>
          </div>
          <button className="btnViewMoreEvent">View More</button>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default eventChristmas;
