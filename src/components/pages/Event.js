import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Ham from "../Ham";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import event_img1 from "../../assets/img/event1.png";
import event_img2 from "../../assets/img/event2.png";


function Event() {
  return (
    <div>
      <Layout>
        <Header />
        <Ham />
        <section id="event">
        <div className="sub_tit event">
          <h1>EVENT</h1>
        </div>
        <div className="inner maru">
          <div className="event_list_wrap">
          <h2>아르마리오 이벤트</h2>
          <ul className="event_list clearfix">
             <li>
                <Link to="/">
                   <div className="event_img_box">
                      <img src={event_img1} alt="사진"></img>
                   </div>
                   <dl className="event_text_box">
                     <dt>네이버 예약하고 오시면 10% 할인</dt>
                     <dd>2021.06.29 ~ 2021.07.10</dd>
                   </dl>
                  </Link>
              </li>
              <li>
              <Link to="/">
                   <div className="event_img_box">
                     <img src={event_img2} alt="사진"></img>
                   </div>
                   <dl className="event_text_box">
                     <dt>네이버 예약하고 오시면 10% 할인</dt>
                     <dd>2021.06.29 ~ 2021.07.10</dd>
                   </dl>
                  </Link>
              </li>
              <li>
              <Link to="/">
                   <div className="event_img_box">
                     <img src={event_img1} alt="사진"></img>
                   </div>
                   <dl className="event_text_box">
                     <dt>네이버 예약하고 오시면 10% 할인</dt>
                     <dd>2021.06.29 ~ 2021.07.10</dd>
                   </dl>
                 </Link>
              </li>
              <li>
              <Link to="/">
                   <div className="event_img_box">
                      <img src={event_img2} alt="사진"></img>
                   </div>
                   <dl className="event_text_box">
                     <dt>네이버 예약하고 오시면 10% 할인</dt>
                     <dd>2021.06.29 ~ 2021.07.10</dd>
                   </dl>
               </Link>
              </li>
              <li>
              <Link to="/">
                   <div className="event_img_box">
                       <img src={event_img1} alt="사진"></img>
                   </div>
                   <dl className="event_text_box">
                     <dt>네이버 예약하고 오시면 10% 할인</dt>
                     <dd>2021.06.29 ~ 2021.07.10</dd>
                   </dl>
              </Link>
              </li>
              <li>
              <Link to="/">
                   <div className="event_img_box">
                      <img src={event_img2} alt="사진"></img>
                   </div>
                   <dl className="event_text_box">
                     <dt>네이버 예약하고 오시면 10% 할인</dt>
                     <dd>2021.06.29 ~ 2021.07.10</dd>
                   </dl>
                  </Link>
              </li>
             
          </ul>
        </div>
      </div>
      </section>
         
        <Footer />
      </Layout>
    </div>
  );
}
export default Event;
