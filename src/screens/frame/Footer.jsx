import React from "react";
import "../../styles/css/style.css";

function Footer() {
  return (
    <footer className="footerWrap">
      <div className="footerLine" />
      <div className="footerArea">
        <div className="footerTop">
          <div className="logoArea">
            <button className="logoBottom" onClick={() => (window.location.href = "/")} />
          </div>
          <div className="footerIcon">
            <a href="mailto:cnftgalaxy@gmail.com" target="_blank" rel="noreferrer">
              <div className="sns gmail" />
            </a>
            <button
              className="sns twitter"
              onClick={() => window.open("https://twitter.com/CNFT_CVillage", "_blank")}
            />
            <button className="sns discord" onClick={() => window.open("https://discord.gg/D43C653t9x", "_blank")} />
          </div>
        </div>
        <address>
          Team Cardanian Korea
          <br />
          Copyright ⓒ 2021 Cardanian.kr All rights reserved.
        </address>
      </div>
    </footer>
  );
}

export default Footer;
