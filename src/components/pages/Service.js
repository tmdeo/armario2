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
          <div class="service">
            <div class="service_title">
              <div class="inner">
                <h2>
                  ARMARIO
                  <br />
                  BE SATISFIED
                </h2>
              </div>
            </div>
            <div class="service_menu">
              <div class="inner">
                <div class="service_menu_title">
                  <h3>서비스</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, repudiandae impedit. Deserunt dolores fuga pariatur
                    doloremque
                  </p>
                  <br />
                  <p>
                    autem? Deleniti, quos molestias amet exercitationem tempore
                    deserunt recusandae lab
                  </p>
                </div>
                <ul class="service_menu_list">
                  <li>
                    <span></span>
                    <div class="sml_txt">
                      <h4>서비스1</h4>
                      <p class="maru">
                        보다 더 쉽게
                        <br />
                        손이 가는 옷이 되도록.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div class="sml_txt">
                      <h4>서비스2</h4>
                      <p class="maru">
                        보다 더 쉽게
                        <br />
                        손이 가는 옷이 되도록.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div class="sml_txt">
                      <h4>서비스3</h4>
                      <p class="maru">
                        보다 더 쉽게
                        <br />
                        손이 가는 옷이 되도록.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div class="sml_txt">
                      <h4>서비스4</h4>
                      <p class="maru">
                        보다 더 쉽게
                        <br />
                        손이 가는 옷이 되도록.
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
