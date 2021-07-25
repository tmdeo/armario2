import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import Ham from "../Ham";

function Service() {
  return (
    <div>
      <Layout>
        <Header />
        <section id="service ramb">
          <div className="service">
            <div className="service_title">
              <div className="inner">
                <h2>
                  ARMARIO
                  <br />
                  BE SATISFIED
                </h2>
              </div>
            </div>
            <div className="service_menu">
              <div className="inner">
                <div className="service_menu_title">
                  <h3>Service</h3>
                  <p className="maru">
                    합리적인 금액에 좋은 품질로 <br />
                    소비자에게 합리적인 가치를 전달합니다.
                  </p>
                </div>
                <ul className="service_menu_list">
                  <li>
                    <span></span>
                    <div className="sml_txt">
                      <h4>맞춤정장</h4>
                      <p className="maru">
                        <p>
                          고객님의 신체를 채촌한 후 <br />
                          체형에 맞게 한 사람을 위한 정장을 제작합니다.
                        </p>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="sml_txt">
                      <h4 className="maru">맞춤셔츠</h4>
                      <p className="maru">
                        다양한 종류의 셔츠원단 선택과
                        <br />
                        채촌 후 제작이 진행됩니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="sml_txt">
                      <h4 className="maru">촬영용 대여복</h4>
                      <p className="maru">
                        웨딩촬영시 필요한 다양한 색감과
                        <br />
                        패턴의 수트가 준비되어 있습니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="sml_txt">
                      <h4 className="maru">수제화</h4>
                      <p className="maru">
                        아르마리오만의 노하우와 스타일로
                        <br />
                        만들어진 편안한 수제화가 제작 가능합니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Ham />
        <Footer />
      </Layout>
    </div>
  );
}
export default Service;
