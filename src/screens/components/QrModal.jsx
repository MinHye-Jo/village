import React, { useRef, useEffect } from "react";
import "../../styles/css/popup.scss";
import TextareaAutosize from "react-textarea-autosize";

function QrModal({ data, open, onClose, onAction }) {
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
        <button className="btnClose" onClick={() => onClose()}></button>
        <div className="popupContents">
          <div className="popupTitle">Pending payment confirmation</div>
          <br />
          <div className="popupText">
            Your order has been approved. <br />
            Send Ada using the information below.
          </div>
          <div className="popupCode">
            <img src="/img/code.png" alt="QRcode" />
          </div>
          <div className="popupText">
            <div className="popupSubtitle">
              <div className="row">
                <div className="boxGreen">
                  <div className="title">Address</div>
                  <div className="value">
                    <TextareaAutosize
                      type="text"
                      readOnly
                      value="2c763e2db8337324df122fffa38e0d97ecdf53d139025a0e1b6d6b97"
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    <button className="btnCopy">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="boxGreen">
                  <div className="title">Amount</div>
                  <div className="value ada">
                    <TextareaAutosize type="text" readOnly value="30" rows="1" />
                    ADA &nbsp;
                    <button className="btnCopy">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="popupSubtitle">Important</div>
            <div className="popupBox red" style={{ textAlign: "left" }}>
              <b>Important</b>
              <br />
              It is minted randomly at all stages. <br />
              Once the minting &raquo; refund is completed for each step, the next step will proceed.
              <br />
              Each step verifles the bulk purchase of the bot. <br />
              (Buyers should be careful of indiscriminate ADA shipments so that they are not suspected of being bots.){" "}
              <br />
              <br />
              · The first stage sells 3,000 units. The price is 35ADA.
              <br />
              · The second stage sells 3,000 units. The price is 40ADA.
              <br />
              · The last step, sells 4,000 units. The price is 45ADA.
              <br />
              (At this stage, we do not verify the bulk purchase of BOT.)
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="popupBg"></div>
    </div>
  );
}

export default QrModal;
