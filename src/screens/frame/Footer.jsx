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
            <button className="sns gmail" />
            <button className="sns twitter" />
            <button className="sns discord" />
          </div>
        </div>
        <address>
          Team Cardanian Korea
          <br />
          Copyright ⓒ 2021 Cardanian.kr Allrights reserved.
        </address>
      </div>
    </footer>
  );
}

export default Footer;
