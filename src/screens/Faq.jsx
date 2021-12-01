import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function Faq() {
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
        <div className="contentsTitle">
          FAQ
          <br />
          <b>It's a FAQ about the MEMBERSHIP</b>
        </div>
        <div className="faqWrap">
          <div className="faqBox">
            <div className="row">
              <div className="faqLeft">
                <div className="iconQ" />
              </div>
              <div className="faqRight">
                <div className="boxMint">What is OG membership?</div>
              </div>
            </div>
            <div className="row">
              <div className="faqLeft">
                <div className="iconA" />
              </div>
              <div className="faqRight">
                <div className="boxGreen">
                  OG is the first members to recognize our project. <br />
                  Our team should give them preferential treatment. <br />
                  However, the benefit will not infringe on the rights of other buyers. <br />
                  And this authority is not eternal.
                </div>
              </div>
            </div>
          </div>
          <div className="faqBox">
            <div className="row">
              <div className="faqLeft">
                <div className="iconQ" />
              </div>
              <div className="faqRight">
                <div className="boxMint"> Is there only OG membership?</div>
              </div>
            </div>
            <div className="row">
              <div className="faqLeft">
                <div className="iconA" />
              </div>
              <div className="faqRight">
                <div className="boxGreen">
                  No. We will form various memberships for those who support us.
                  <br /> And if they don't access our server for a week, their authority expires.
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

export default Faq;
