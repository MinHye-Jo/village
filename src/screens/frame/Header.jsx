import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/header.scss";
import { languageState } from "../../store/app";
import { useRecoilState } from "recoil";

function Header() {
  // 서브메뉴 제어
  const [subOpen, setSubOpen] = useState(false);

  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <header className="headerWrap">
      <div className="headerInner">
        {/* <div className="logo">
          <h1>
            <a href="/"></a>
          </h1>
        </div> */}
        <div className="headerRight">
          <div className="moNav">
            <button className="iconMenu" onClick={() => setSubOpen(true)}></button>
            <div className="moMenu" style={{ display: subOpen ? "block" : "none" }}>
              <button className="iconClose" onClick={() => setSubOpen(false)}></button>
              <div className="moCon">
                <div className="guide">
                  <div className="guideItemTop" style={{ fontWeigt: "20px" }}>
                    [ Project Info ]
                  </div>
                  <Link to="/" className="guideItem">
                    * About project
                  </Link>
                  <Link to="/" className="guideItem">
                    * road map
                  </Link>
                  <Link to="/" className="guideItem">
                    * Team Member
                  </Link>
                  <div className="guideItemTop"> [ Cardano village map ]</div>
                  <Link to="/" className="guideItem">
                    * Continental map
                  </Link>
                  <Link to="/" className="guideItem">
                    - FAQ
                  </Link>
                  <Link to="/" className="guideItem">
                    - Contact
                  </Link>
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
