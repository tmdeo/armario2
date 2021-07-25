import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import Ham from "../Ham";

function Review() {
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal);
  //   console.log("hey");
  // };
  const listContext = [
    {
      id: "1",
      title: "title1",
      desc: "2021.03.01",
      desc2: "내용1",
    },
    {
      id: "2",
      title: "title2",
      desc: "2021.05.01",
      desc2: "내용2",
    },
    {
      id: "3",
      title: "title3",
      desc: "2021.07.01",
      desc2: "내용3",
    },
  ];
  function Context({ id, title, desc, desc2 }) {
    return (
      <li id={id}>
        <span className="review_img"></span>
        <span className="review_list">
          <strong>{title}</strong>
          <em>{desc}</em>
        </span>
        <span className="more">
          <Link
            to={{
              pathname: "/modal",
              state: { id, title, desc, desc2 },
            }}
          >
            리뷰보기
          </Link>
        </span>
      </li>
    );
  }

  return (
    <div>
      <Layout>
        <Header />
        <section id="review ramb">
          <div className="review">
            <div className="review_title">
              <div className="inner">
                <h2>REVIEW</h2>
              </div>
            </div>
            <div className="review_menu">
              <div className="inner">
                <h3>올해의 베스트 리뷰 선정</h3>
                <ul>
                  {listContext.map((txt) => (
                    <Context
                      key={txt.id}
                      title={txt.title}
                      desc={txt.desc}
                      desc2={txt.desc2}
                    />
                  ))}
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
export default Review;
