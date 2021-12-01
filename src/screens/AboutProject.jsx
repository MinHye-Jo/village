import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";

function AboutProject() {
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
        <div className="contentsTitle">About Project</div>
        <div className="aboutWrap">
          <div className="row half">
            <img src="/img/map1.png" className="map1" alt="map" />
          </div>
          <div className="row half">
            <div className="aboutText">
              We are CNFT development team in Korea.
              <br />
              Cardano Village is a project that focuses on the capabilities our team has accumulated so far.
              <br />
              <br />
              This project is metaverse.
              <br />
              There is a continent and there is a village in it.
              <br />
              In the village, Cardanians carry out various activities such as land, houses, and house decoration.
              <br />
              We will continue to develop.
              <br />
              <br />
              Milestones will continue to develop and present visions.
              <br />
              Our team is also researching the CNFT exchange and GAME.
              <br />
              <br />
              <span>
                Please pay attention to this project.
                <br />
                We are moving toward the future with this project.
              </span>
            </div>
          </div>
        </div>
        <div className="blank" />
      </div>
    </div>
  );
}

export default AboutProject;
