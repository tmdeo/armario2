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
                    <h2>"특별한 순간</h2>
                    <h2>아르마리오"</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cn("inner", "slideinner")}>
                    <h2 className="h2tag">REVIEW MAKETH GIFT</h2>

                    <p>양식에 맞게 리뷰작성시 맞춤 셔츠, 넥타이 증정</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={cn("inner", "slideinner")}>
                    <h2>맞춤예복 계약시</h2>
                    <h2>촬영용 대여복 무료</h2>
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
                    <span className="ramb">BALANCED</span>
                    <span className="ramb">:SUIT</span>
                  </div>
                  <div className="intro_desc">
                    <h3 className="ramb">About us</h3>
                    <span>
                      '전통'과 '트렌드'를 담은 슈트
                      <br />
                      전통과 트렌드를 담습니다.
                    </span>
                    <span className="lastspan">
                      균형과 진정성을 생각합니다.
                    </span>
                    <p>
                      <strong>'아르마리오'</strong>
                      에서 만들어지는
                      <br /> 모든 정장은 직영 공방에서 제작이 이루어지며
                      <br />
                      정품 원단과 최고급 부자재를 사용하여 제작이 됩니다. VIP급,
                      <br />
                      슐레인 급 등 출처를 알 수 없는 원단은 고객님께 권하지도
                      <br />
                      취급을 하지도 않음을 약속합니다. 남성의 의복 중 정장은
                      <br />
                      약속을 하고 역사에 담기는 옷입니다. 그래서 트렌드를 완전히
                      <br />
                      무시할 수는 없지만 기본에 충실한 옷을 만들려 노력하고
                      <br />
                      있습니다. 정성과 진심이 담긴 옷을 만들기 위해
                      <br />
                      노력하겠습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* //main_intro */}
            <div className="main_cont ramb">
              <div className="inner ramb">
                <div className="main_cont_img">
                  <span>SIMPLE</span>
                </div>
                <div className="main_cont_desc">
                  <h3>
                    단순함은 우아함의 진정한
                    <br />
                    핵심
                  </h3>
                  <p className="maru">
                    아르마리오는 편안하고 우아한 옷을 제작합니다.
                    <br /> 옷장 속에 쉽게 손이 갈 수 있도록
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
