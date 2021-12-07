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
          <div className="popupTitle">{data && data.nftName}</div>
          <div className="cardWrap">
            <div className="cardImg">
              {/*  sold out 이면 display:block; 아니면 display:block*/}
              <div className="soldOut" style={{ display: "none" }} />
              <img src={data && data.imgUrl} alt="collection" />
            </div>
          </div>
          <div className="popupText">
            <div className="popupSubtitle">
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Continent</div>
                  <div className="value">{data && data.param2}</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Village</div>
                  <div className="value">{data && data.param3}</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Village Number</div>
                  <div className="value">{data && data.param1}</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">time</div>
                  <div className="value">{data && data.param4}</div>
                </div>
              </div>
              <div className="row half">
                <div className="boxGreen">
                  <div className="title">Tree Color</div>
                  <div className="value">{data && data.param5}</div>
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
