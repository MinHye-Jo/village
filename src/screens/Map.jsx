import React, { useState, useEffect, useRef } from "react";
import "../styles/css/index.scss";
import QrModal from "./components/QrModal";

import { collectionInfo, getAddress } from "../services/collection";

const dday = new Date("December 10, 2021, 13:00:00"); //디데이
// UTC 타입 현재 날짜 (고정)
const curr = new Date();
const today = new Date(curr.getTime() + curr.getTimezoneOffset() * 60 * 1000);

console.log(dday);
console.log(today);

function Map(props) {
  const canvasRef = useRef();

  // 컬렉션 데이터
  const [canvasTag, setCanvasTag] = useState([]);

  // 카운트 다운 인터벌 셋
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image = new Image();
    image.src = "img/map.jpeg";

    image.onload = function () {
      context.drawImage(image, 0, 0, 1100, 800);
    };

    /*
    // 사이즈 조정테스트
    var scaleToFit = Math.min(scaleX, scaleY);
    var scaleToCover = Math.max(scaleX, scaleY);

    stage.style.transformOrigin = '0 0'; //scale from top left
    stage.style.transform = 'scale(' + scaleToFit + ')';
    */
    // 사각형 그리기
    context.clearRect(1, 1, 100, 100);
    context.strokeRect(4, 4, 4, 4);

    setCanvasTag(canvas);
  }, [canvasRef]);

  console.log(canvasTag);
  return (
    <div className="wrap">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Map;
