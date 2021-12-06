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
                <div className="boxMint">Please let me know the sales price and procedure.</div>
              </div>
            </div>
            <div className="row">
              <div className="faqLeft">
                <div className="iconA" />
              </div>
              <div className="faqRight">
                <div className="boxGreen">
                  It is minted randomly at all stages.
                  <br />
                  Once the minting -&raquo; refund is completed for each step, the next step will proceed. Each step
                  verifies the bulk purchase of the bot.
                  <br />
                  <br />
                  <div className="greenSmall">
                    <b>
                      * Buyers should be careful of indiscriminate ADA shipments so that they are not suspected of being
                      bots.
                    </b>
                    <br />
                    <br />
                    The first stage sells 3,000 units.
                    <br />
                    The price is <span>35ADA</span>. <br />
                    <br />
                    The second stage sells 3,000 units.
                    <br />
                    The price is <span>40ADA</span>.
                    <br />
                    <br />
                    The last step, step 3, sells 4,000 units.
                    <br />
                    The price is <span>45ADA</span>. <br />
                    <br />
                    <b>* At this stage, we do not verify the bulk purchase of BOT.</b>
                  </div>
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
