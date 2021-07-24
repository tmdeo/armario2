import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Ham from "../Ham";
import Layout from "../Layout";

function Store() {
  return (
    <div>
      <Layout>
        <Header />
        <Ham />
        <section id="store">
        <div class="sub_tit store">
          <h1>STORE</h1>
        </div>
        <div class="inner maru">
          <div class="map_wrap">
            <h2> 찾아 오시는길 </h2>
            <div class="map">
              <span> 지도 들어가는 자리 </span>
            </div>
          </div>
          <div class="map_info">
            <h3>서울특별시 종로구 돈화문로5가길 11 1층 아르마리오종로점</h3>
            <ul>
              <li>
                <dl class="clearfix">
                  <dt>
                     <span class="map_icon1">오시는길</span>
                  </dt>
                  <dd>
                    서울특별시 종로구 돈화문로5가길 11 1층 아르마리오종로점
                  </dd>
                </dl>
              </li>
              <li>
                <dl class="clearfix">
                  <dt >
                    <span class="map_icon2">영업시간</span>
                  </dt>
                  <dd>
                    <p>평일 오전 11:00 - 오후 8:00 매주 월요일 휴무</p>
                    <p>주말 오전 10:00 - 오후 8:00</p>
                  </dd>
                </dl>
              </li>
              <li>
                <dl class="clearfix">
                  <dt>
                    <span class="map_icon3">전화번호</span>
                  </dt>
                  <dd>
                    02-743-3123
                  </dd>
                </dl>
              </li>
              <li>
                <dl class="clearfix">
                  <dt>
                    <span class="map_icon4">주차안내</span>
                  </dt>
                  <dd>
                    주차 무료
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
           <div class="qna_btn_wrap">
             <span class="qna_btn qna_btn1"><a href="#">전화문의</a></span>
             <span class="qna_btn qna_btn2"><a href="#">톡톡문의</a></span>   
           </div>
        </div>
      </section>
        <Footer />
      </Layout>
    </div>
  );
}
export default Store;
