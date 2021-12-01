import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function TeamMember() {
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
        <div className="contentsTitle">Team Member</div>
        <div className="memberWrap">
          <div className="row left">
            <div className="memberImg">
              <img src="/img/memberBruce.png" alt="bruce"></img>
            </div>
            <div className="memberTitle">
              <div className="memberName">
                Bruce(A-DAK-GALBI)
                <br />
                <span>COMMUNITY, MARKETING, Co-founder</span>
              </div>
              <div className="memberText">
                IT experts such as finance, telecommunications, and in-house consulting.
                <br />
                He worked for the world's top 50 financial and telecommunications companies and is a passionate person
                for blockchain and NFT.
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="memberImg">
              <img src="/img/memberDonald.png" alt="donald"></img>
            </div>
            <div className="memberTitle">
              <div className="memberName">
                Donald
                <br />
                <span>DEVELOPMENT, Co-Founder</span>
              </div>
              <div className="memberText">
                Full stack developer with 14 years of experience in the financial industry.
                <br /> Specialist in designing & developing high-capacity, high-performance systems.
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="memberImg">
              <img src="/img/memberAutumn.png" alt="autumn"></img>
            </div>
            <div className="memberTitle">
              <div className="memberName">
                Autumn
                <br />
                <span>ART & DESIGN</span>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="memberImg">
              <img src="/img/memberScott.png" alt="scott"></img>
            </div>
            <div className="memberTitle">
              <div className="memberName">
                Scott
                <br />
                <span>DEVELOPMENT</span>
              </div>
              <div className="memberText">
                Full stack developer with 6years in various field.
                <br />
                Motto : Do it all if need to.
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="memberImg">
              <img src="/img/memberLaura.png" alt="laura"></img>
            </div>
            <div className="memberTitle">
              <div className="memberName">
                Laura
                <br />
                <span>DEVELOPMENT</span>
              </div>
              <div className="memberText">
                Experienced full-stack developer for 7 years based in Seoul, South Korea.
                <br />
                <br />
                Currently diving deeper into React.js development.
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="memberImg">
              <img src="/img/memberAnna.png" alt="anna"></img>
            </div>
            <div className="memberTitle">
              <div className="memberName">
                Anna
                <br />
                <span>UI/UX DESIGN</span>
              </div>
              <div className="memberText">I'm trying to design with interface and user experience in mind.</div>
            </div>
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default TeamMember;
