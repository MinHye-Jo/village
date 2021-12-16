import React, { useState, useEffect, useRef } from "react";
import "../styles/css/index.scss";

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

  let canvas = null;
  let context = null;

  const image = new Image();
  image.src = "img/map.jpeg";

  // 카운트 다운 인터벌 셋
  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    image.onload = function () {
      context.drawImage(image, 0, 0, 1100, 800);
    };

    console.log(context);

    // 사각형 그리기
    context.clearRect(1, 1, 100, 100);
    context.strokeRect(4, 4, 4, 4);

    var lastX = canvas.width / 2,
      lastY = canvas.height / 2;
    var dragStart, dragged;
    canvas.addEventListener(
      "mousedown",
      function (evt) {
        document.body.style.mozUserSelect =
          document.body.style.webkitUserSelect =
          document.body.style.userSelect =
            "none";
        lastX = evt.offsetX || evt.pageX - canvas.offsetLeft;
        lastY = evt.offsetY || evt.pageY - canvas.offsetTop;
        dragStart = context.transformedPoint(lastX, lastY);
        dragged = false;
      },
      false,
    );
    canvas.addEventListener(
      "mousemove",
      function (evt) {
        lastX = evt.offsetX || evt.pageX - canvas.offsetLeft;
        lastY = evt.offsetY || evt.pageY - canvas.offsetTop;
        dragged = true;
        if (dragStart) {
          var pt = context.transformedPoint(lastX, lastY);
          context.translate(pt.x - dragStart.x, pt.y - dragStart.y);
          redraw();
        }
      },
      false,
    );
    canvas.addEventListener(
      "mouseup",
      function (evt) {
        dragStart = null;
        if (!dragged) zoom(evt.shiftKey ? -1 : 1);
      },
      false,
    );

    var scaleFactor = 1.1;
    var zoom = function (clicks) {
      var pt = context.transformedPoint(lastX, lastY);
      context.translate(pt.x, pt.y);
      var factor = Math.pow(scaleFactor, clicks);
      context.scale(factor, factor);
      context.translate(-pt.x, -pt.y);
      redraw();
    };

    var handleScroll = function (evt) {
      var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
      if (delta) zoom(delta);
      return evt.preventDefault() && false;
    };
    canvas.addEventListener("DOMMouseScroll", handleScroll, false);
    canvas.addEventListener("mousewheel", handleScroll, false);

    setCanvasTag(canvas);
  }, [canvasRef]);

  function redraw() {
    // Clear the entire canvas
    var p1 = context.transformedPoint(0, 0);
    var p2 = context.transformedPoint(canvas.width, canvas.height);
    context.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

    // Alternatively:
    // context.save();
    // context.setTransform(1,0,0,1,0,0);
    // context.clearRect(0,0,canvas.width,canvas.height);
    // context.restore();

    context.drawImage(image, 200, 50);

    context.beginPath();
    context.lineWidth = 6;
    context.moveTo(399, 250);
    context.lineTo(474, 256);
    context.stroke();

    context.save();
    context.translate(4, 2);
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(436, 253);
    context.lineTo(437.5, 233);
    context.stroke();

    context.save();
    context.translate(438.5, 223);
    context.strokeStyle = "#06c";
    context.beginPath();
    context.lineWidth = 0.05;
    for (var i = 0; i < 60; ++i) {
      context.rotate((6 * i * Math.PI) / 180);
      context.moveTo(9, 0);
      context.lineTo(10, 0);
      context.rotate((-6 * i * Math.PI) / 180);
    }
    context.stroke();
    context.restore();

    context.beginPath();
    context.lineWidth = 0.2;
    context.arc(438.5, 223, 10, 0, Math.PI * 2);
    context.stroke();
    context.restore();

    // context.drawImage(image, 379, 233, 40, 40);
    // context.drawImage(image, 454, 239, 40, 40);
    // context.drawImage(image, 310, 295, 20, 20);
    // context.drawImage(image, 314.5, 296.5, 5, 5);
    // context.drawImage(image, 319, 297.2, 5, 5);
  }

  console.log(canvasTag);

  return (
    <div className="wrap">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Map;
