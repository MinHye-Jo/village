import React, { useRef, useEffect } from "react";
import "../../styles/css/popup.scss";

function DetailModal({ data, open, onClose, onAction }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // 영역 밖 클릭시 모달창 닫기
  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if (open) onClose();
    }
  }
  return (
    <div className="popupWrap" style={{ display: open ? "block" : "none" }}>
      <div className="popupArea" ref={wrapperRef}>
        <button className="btnClose" onClick={() => onClose()} />
        <div className="popupContents">
          <div className="popupTitle">Cardano Village</div>
          <div className="cardWrap">
            <div className="cardImg">
              {/*  sold out 이면 display:block; 아니면 display:block*/}
              <div className="soldOut" style={{ display: "none" }} />
              <img src="/img/village2.png" alt="collection" />
            </div>
          </div>
          <div className="popupText">
            <div className="popupSubtitle">
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
                  <div className="value">1</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Theme</div>
                  <div className="value">Night</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Tree Color</div>
                  <div className="value">Green</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Charles</div>
                  <div className="value">N</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Soldier</div>
                  <div className="value">N</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popupBg" />
    </div>
  );
}

export default DetailModal;
