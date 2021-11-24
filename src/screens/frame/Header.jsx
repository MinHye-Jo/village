import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/style.css";
import "../../styles/css/header.scss";

function Header() {
  // 서브메뉴 제어
  const [subOpen, setSubOpen] = useState(false);
  const [sub1Open, setSub1Open] = useState(false);
  const [sub2Open, setSub2Open] = useState(false);

  // 스크롤 Y 축 위치 저장
  const [ScrollY, setScrollY] = useState(0);

  // 스크롤 움직일때마다 위치 저장
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  return (
    <header className={ScrollY > 0 ? "headerWrap headerActive" : "headerWrap"}>
      <div className="headerBox">
        <div className="logoArea">
          <button onClick={() => (window.location.href = "/")}>
            <div className="logoTop" />
            <div className="logoTitle">
              <span>Cardano</span>Village
            </div>
          </button>
        </div>

        <div className="lnbArea">
          <button className="btnLnb">
            Project Info
            <div className="lnbBorder" />
            <div className="submenu">
              <button onClick={() => (window.location.href = "/comingSoon")}>About Project</button>
              <button onClick={() => (window.location.href = "/roadmap")}>Road Map</button>
              <button onClick={() => (window.location.href = "/comingSoon")}>Team Member</button>
            </div>
          </button>
          <button className="btnLnb">
            Cardano Village Map
            <div className="lnbBorder" />
            <div className="submenu">
              <button onClick={() => (window.location.href = "/comingSoon")}>Continental Map</button>
            </div>
          </button>
          <button className="btnLnb" onClick={() => (window.location.href = "/comingSoon")}>
            FAQ
            <div className="lnbBorder" />
          </button>
          <button className="btnLnb">
            Contact
            <div className="lnbBorder" />
            <div className="submenu">
              <button>
                <a href="mailto:cnftgalaxy@gmail.com" target="_blank" rel="noreferrer">
                  Gmail
                </a>
              </button>
              <button onClick={() => window.open("https://twitter.com/CNFT_CVillage", "_blank")}>Twitter</button>
              <button onClick={() => window.open("https://discord.gg/D43C653t9x", "_blank")}>Discord</button>
            </div>
          </button>
        </div>
        <div className="moLnbWrap">
          <div className="moLnbWrap menu">
            <button className="moMenu" onClick={() => setSubOpen(true)} />
            <div className="moMenuWrap" style={{ display: subOpen ? "block" : "none" }}>
              <div className="moTop">
                <button onClick={() => (window.location.href = "/")}>
                  <div className="logoTop" />
                </button>
                <button className="btnClose" onClick={() => setSubOpen(false)} />
              </div>
              <div className="moLnb">
                <button className="btnLnb lnbMypage" onClick={() => setSub1Open(!sub1Open)}>
                  Project Info <div className={sub1Open ? "rotate" : "rotate2"} />
                </button>
                <div className="moSubmenu" style={{ display: sub1Open ? "block" : "none" }}>
                  <button className="subLnb" onClick={() => (window.location.href = "/comingSoon")}>
                    About Project
                  </button>
                  <button className="subLnb" onClick={() => (window.location.href = "/roadmap")}>
                    Road Map
                  </button>
                  <button className="subLnb" onClick={() => (window.location.href = "/comingSoon")}>
                    Team Member
                  </button>
                </div>
                <button className="btnLnb" onClick={() => setSub2Open(!sub2Open)}>
                  Cardano Village Map <div className={sub2Open ? "rotate" : "rotate2"} />
                </button>
                <div className="moSubmenu" style={{ display: sub2Open ? "block" : "none" }}>
                  <button className="subLnb" onClick={() => (window.location.href = "/comingSoon")}>
                    Continental Map
                  </button>
                </div>
                <button className="btnLnb" onClick={() => (window.location.href = "/comingSoon")}>
                  FAQ
                </button>
                <button className="btnLnb">Contack</button>
                <div className="footerIcon">
                  <a href="mailto:cnftgalaxy@gmail.com" target="_blank" rel="noreferrer">
                    <div className="sns gmail" />
                  </a>
                  <button
                    className="sns twitter"
                    onClick={() => window.open("https://twitter.com/CNFT_CVillage", "_blank")}
                  />
                  <button
                    className="sns discord"
                    onClick={() => window.open("https://discord.gg/D43C653t9x", "_blank")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
