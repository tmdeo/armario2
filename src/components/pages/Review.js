import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import Ham from "../Ham";
import Modal from "./Modal/Modal";

function Review() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log("hey");
  };

  function Context({ id, title, desc, desc2 }) {
    return (
      <li>
        <span className="review_img"></span>
        <span className="review_list">
          <strong>{title}</strong>
          <em>{desc}</em>
        </span>
        <span className="more" onClick={toggleModal}>
          리뷰보기
        </span>
        {modal && <Modal toggleModal={toggleModal} desc2={desc2} id={id} />}
      </li>
    );
  }
  const listContext = [
    {
      id: "1",
      title: "abcde",
      desc: "raft' 모드는 이 작업이 현재 진행중이며, 아직 merge할 수 있는 상태가 아니란 것을 나타내고, 코드에 대한 토론을 원할때 사용한다.(merge불가능)",
      desc2: "내용1",
    },
    {
      id: "2",
      title: "efgh",
      desc: "qwet' 모드는 이 작업이 현재 진행중이며, 아직 merge할 수 있는 상태가 아니란 것을 나타내고, 코드에 대한 토론을 원할때 사용한다.(merge불가능)",
      desc2: "내용2",
    },
    {
      id: "3",
      title: "qeert",
      desc: "qwer는 이 작업이 현재 진행중이며, 아직 merge할 수 있는 상태가 아니란 것을 나타내고, 코드에 대한 토론을 원할때 사용한다.(merge불가능)",
      desc2: "내용3",
    },
  ];
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
                <h3>전체 리뷰</h3>
                <ul>
                  {listContext.map((txt) => (
                    <Context key={txt.id} title={txt.title} desc2={txt.desc2} />
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
