import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Ham from "../Ham";
import Layout from "../Layout";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

//style
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Main() {
  return (
    <>
      <Layout>
        <Header />
        <section id="main">
          <div className="main">
            <div className="main_head">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                spaceBetween={0}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className={cn("inner", "slideinner")}>
                    <h2>"고객님 슈트패브릭 어떠셨나요?"</h2>
                    <p>
                      재구매 고객님께 10% 할인권 증정 이벤트 <br />
                      기간:21.07.02~21.07.02
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cn("inner", "slideinner")}>
                    <h2>"고객님 슈트패브릭 어떠셨나요?"</h2>
                    <p>
                      재구매 고객님께 10% 할인권 증정 이벤트 <br />
                      기간:21.07.02~21.07.02
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cn("inner", "slideinner")}>
                    <h2>"고객님 슈트패브릭 어떠셨나요?"</h2>
                    <p>
                      재구매 고객님께 10% 할인권 증정 이벤트 <br />
                      기간:21.07.02~21.07.02
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* //main_head */}
            <div className="main_intro">
              <div className={cn("inner", "maru")}>
                <h2 className="ramb">ARMARIO</h2>
                <div className="intro_box">
                  <div className="intro_img">
                    <span className="ramb">BALANCED JACKET</span>
                    <span className="ramb">:LIGHT&PACKABLE</span>
                  </div>
                  <div className="intro_desc">
                    <h3 className="ramb">About us</h3>
                    <span>
                      보다 더 쉽게
                      <br />
                      손이 가는 옷이 되도록,
                    </span>
                    <span className="lastspan">
                      불편함은 덜고 '일상'을 담다.
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi, fugiat ipsa animi possimus expedita suscipit
                      quasi dignissimos mollitia recusandae tenetur beatae
                      quisquam nulla fugit similique rerum laboriosam a unde
                      nisi? Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Commodi, fugiat ipsa animi possimus expedita
                      suscipit quasi dignissimos mollitia recusandae tenetur
                      beatae quisquam nulla fugit similique rerum laboriosam a
                      unde nisi? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Commodi, fugiat ipsa animi possimus
                      expedita suscipit quasi dignissimos mollitia recusandae
                      tenetur beatae quisquam nulla fugit similique rerum
                      laboriosam a unde nisi? Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Commodi, fugiat ipsa animi
                      possimus expedita suscipit quasi dignissimos mollitia
                      recusandae tenetur beatae quisquam nulla fugit similique
                      rerum laboriosam a unde nisi?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* //main_intro */}
            <div className="main_cont ramb">
              <div className="inner ramb">
                <div className="main_cont_img">
                  <span>BALANCED SERIES</span>
                </div>
                <div className="main_cont_desc">
                  <h3>
                    스타일과 편안함의
                    <br />
                    발란스
                  </h3>
                  <p className="maru">
                    당연한듯 포기해야했던 부분에 대한 고민에서 시작된
                    발란스라인은 스타일과 편안함 두가지의 간극을 찾아내어
                    만들어졌습니다.
                  </p>
                  <p className="maru">
                    누구나, 언제 어디서나 어떤코디에서도 가장 보편적인 핏과
                    착용감을 제공합니다.
                  </p>
                </div>
                <Swiper
                  breakpoints={{
                    500: {
                      width: 500,
                      slidesPerView: 1,
                    },
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                  }}
                  slidesPerView={3}
                  // spaceBetween={50}
                  navigation={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div className="main_cont_prd">
                      <span className="main_cont_prd_img"></span>
                      <span className="main_cont_prd_desc">
                        WindTche 3COLOR SUIT
                        <br />
                        219,000원
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main_cont_prd">
                      <span className="main_cont_prd_img"></span>
                      <span className="main_cont_prd_desc">
                        WindTche 3COLOR SUIT
                        <br />
                        219,000원
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main_cont_prd">
                      <span className="main_cont_prd_img"></span>
                      <span className="main_cont_prd_desc">
                        WindTche 3COLOR SUIT
                        <br />
                        219,000원
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main_cont_prd">
                      <span className="main_cont_prd_img"></span>
                      <span className="main_cont_prd_desc">
                        WindTche 3COLOR SUIT
                        <br />
                        219,000원
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main_cont_prd">
                      <span className="main_cont_prd_img"></span>
                      <span className="main_cont_prd_desc">
                        WindTche 3COLOR SUIT
                        <br />
                        219,000원
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main_cont_prd">
                      <span className="main_cont_prd_img"></span>
                      <span className="main_cont_prd_desc">
                        WindTche 3COLOR SUIT
                        <br />
                        219,000원
                      </span>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* mySwiper2 */}
              </div>
            </div>
          </div>
          {/* //main-cont */}
        </section>

        <Ham />
        <Footer />
      </Layout>
    </>
  );
}
export default Main;
