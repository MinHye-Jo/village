import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";
import DetailModal from "./components/DetailModal";

import { ntfList } from "../services/collection";

function Collection() {
  // 팝업제어
  const [detailOpen, setDetailOpen] = useState(false);
  // 필터 제어
  const [filterOpen, setFilterOpen] = useState(false);

  // 코인 리스트 조회
  useEffect(() => {
    (async () => {
      const { data } = await ntfList({ collectionId: 42 });
      if (data && data.return_code === 200) {
        console.log(data);
      }
    })();
  }, []);

  return (
    <div className="wrap">
      <DetailModal open={detailOpen} onClose={() => setDetailOpen(false)} />
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
        <div className="contentsTitle">Collection</div>
        <div className="collectionTop">
          <div className="filterWrap">
            <div className="btnFilter" onClick={() => setFilterOpen(true)}>
              Filter&nbsp;
              <div className="rotate4" />
            </div>
            <div className="filterArea" style={{ display: filterOpen ? "block" : "none" }}>
              <div className="btnFilterClose" onClick={() => setFilterOpen(false)}>
                Filter&nbsp;
                <div className="rotate3" />
              </div>
              <div className="filterTitle">Time</div>
              <select name="selectTime" id="">
                <option value="0" selected="selected" hidden="hidden">
                  Choose Here
                </option>
                <option value="Dawn">Dawn</option>
                <option value="Noon">Noon</option>
                <option value="Sunset">Sunset</option>
                <option value="Night">Night</option>
              </select>
              <div className="filterTitle">Tree Color</div>
              <select name="selectTreaColor" id="">
                <option value="0" selected="selected" hidden="hidden">
                  Choose Here
                </option>
                <option value="Yellow">Yellow</option>
                <option value="Pink">Pink</option>
                <option value="Green">Green</option>
              </select>
              <button className="btnFilterSearch">Search</button>
            </div>
          </div>

          <div className="searchWrap">
            <input type="text" placeholder="Search" />
            <button className="btnSearch" />
          </div>
        </div>
        <div className="wrapCollection">
          <div className="collectionArea">
            <div className="collectionContain" onClick={() => setDetailOpen(true)}>
              <div className="collectionImg">
                {/* sold out 아닐때 display none */}
                <div className="soldOut" style={{ display: "none" }} />
                <img src="/img/village1.png" alt="collection" />
              </div>
            </div>
          </div>
          <div className="collectionArea">
            <div className="collectionContain" onClick={() => setDetailOpen(true)}>
              <div className="collectionImg">
                {/* sold out 일때 display block */}
                <div className="soldOut" />
                <img src="/img/village2.png" alt="collection" />
              </div>
            </div>
          </div>
          <div className="collectionArea">
            <div className="collectionContain" onClick={() => setDetailOpen(true)}>
              <div className="collectionImg">
                <div className="soldOut" />
                <img src="/img/village3.png" alt="collection" />
              </div>
            </div>
          </div>
          <div className="collectionArea">
            <div className="collectionContain" onClick={() => setDetailOpen(true)}>
              <div className="collectionImg">
                <div className="soldOut" />
                <img src="/img/village4.png" alt="collection" />
              </div>
            </div>
          </div>
          <div className="collectionArea">
            <div className="collectionContain" onClick={() => setDetailOpen(true)}>
              <div className="collectionImg">
                <div className="soldOut" />
                <img src="/img/village5.png" alt="collection" />
              </div>
            </div>
          </div>
        </div>
        <button className="btnViewMore">View More</button>
        <div className="blank" />
      </div>
    </div>
  );
}

export default Collection;
