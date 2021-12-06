import React, { useState, useEffect } from "react";
import "../styles/css/subpageTop.scss";
import DetailModal from "./components/DetailModal";

import { ntfList } from "../services/collection";

function Collection() {
  // 팝업제어
  const [detailOpen, setDetailOpen] = useState(false);
  // 팝업데이터
  const [detailData, setDetailData] = useState(null);
  // 필터 제어
  const [filterOpen, setFilterOpen] = useState(false);
  // 검색조건
  const [searchData, setSearchData] = useState({
    collectionId: 42,
    priority: 0,
    param4: "",
    param5: "",
    keyword: "",
  });
  // 컬렉션 데이터
  const [collectionData, setCollectionData] = useState([]);

  // 필터 변경 플레그 체크
  const [filterFlag, setFilterFlag] = useState(false);

  // 초기 데이터 조회
  useEffect(() => {
    (async () => {
      searchAction();
    })();
  }, []);

  // 코인 리스트 조회
  const searchAction = async () => {
    setFilterFlag(false);

    const { data } = await ntfList(searchData);
    if (data && data.return_code === 200) {
      if (data.response.length > 0) {
        console.log(data.response[data.response.length - 1]);
        setSearchData({ ...searchData, priority: data.response[data.response.length - 1].priority });
      }
      setCollectionData(data.response);
    }
  };

  // 검색 조건 선택
  const handleSelect = (type, val) => {
    setFilterFlag(true);
    setSearchData({ ...searchData, [type]: val, priority: 0 });
  };

  // 이미지 더보기 클릭
  const viewMoreAction = async () => {
    // 필터 변경사항 있으면 초기 검색으로
    if (filterFlag) {
      searchAction();
    } else {
      const { data } = await ntfList(searchData);
      if (data && data.return_code === 200) {
        if (data.response.length > 0) {
          setSearchData({ ...searchData, priority: data.response[data.response.length - 1].priority });

          const mergedData = collectionData.concat(...data.response);
          setCollectionData(mergedData);
        }
      }
    }
  };

  // 이미지 클릭 후 상세 모달 표출
  const detailSet = (data) => {
    setDetailData(data);
    setDetailOpen(true);
  };

  return (
    <div className="wrap">
      <DetailModal data={detailData} open={detailOpen} onClose={() => setDetailOpen(false)} />
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
              <select
                name="selectTime"
                defaultValue={searchData.param4}
                onChange={(e) => handleSelect("param4", e.target.value)}
              >
                <option value="" hidden="hidden">
                  Choose Here
                </option>
                <option value="Dawn">Dawn</option>
                <option value="Noon">Noon</option>
                <option value="Sunset">Sunset</option>
                <option value="Night">Night</option>
              </select>
              <div className="filterTitle">Tree Color</div>
              <select
                name="selectTreaColor"
                defaultValue={searchData.param5}
                onChange={(e) => handleSelect("param5", e.target.value)}
              >
                <option value="" hidden="hidden">
                  Choose Here
                </option>
                <option value="Yellow">Yellow</option>
                <option value="Pink">Pink</option>
                <option value="Green">Green</option>
              </select>
              <button className="btnFilterSearch" onClick={searchAction}>
                Search
              </button>
            </div>
          </div>

          <div className="searchWrap">
            <input type="text" placeholder="Number" onChange={(e) => handleSelect("keyword", e.target.value)} />
            <button className="btnSearch" onClick={searchAction} />
          </div>
        </div>
        <div className="wrapCollection">
          {collectionData && collectionData.length
            ? collectionData.map((o, idx) => {
                return (
                  <div className="collectionArea" key={idx}>
                    <div className="collectionContain" onClick={() => detailSet(o)}>
                      <div className="collectionImg">
                        {/* sold out 아닐때 display none */}
                        <div
                          className="soldOut"
                          style={{ display: o.targetQuantity == o.mintCount ? "block" : "none" }}
                        />
                        <img src={o.thumnailUrl} alt="collection" />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <button className="btnViewMore" onClick={viewMoreAction}>
          View More
        </button>
        <div className="blank" />
      </div>
    </div>
  );
}

export default Collection;
