import "./Main.css";
import React from "react";
import { useState } from "react";

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   image: {
//     winth: "70px",
//     height: "70px",
//   },
//   gnb: {
//     display: "flex",
//   },
// };
function Main() {
  return (
    <div className="App">
      <div className="wrapper">
        <section className="background">
          <div className="frontText">
            <h2 className="frontTitle">안녕하세요</h2>
            <p className="frontContent">반갑습니다 만나서반가워요</p>
            <button
              className="frontBtn"
              type="button"
              onClick={() => {
                alert("안녕하세요!");
              }}
            >
              버튼
            </button>
          </div>
        </section>
        <section>
          <div className="secondTxt">
            <h2>집에가고싶어요</h2>
            <p>너무어려운것가타요</p>
          </div>
        </section>
        <section className="postBox">
          <div className="postCard">
            <h2>힘들어요</h2>
            <p className="postCardTxt">왜이렇게어렵냐이거</p>
          </div>
          <div className="postCard">
            <h2>2번</h2>
            <p class="post-card-txt">2-2번</p>
          </div>
          <div className="postCard">
            <h2>3번</h2>
            <p class="post-card-txt">3-3번</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
