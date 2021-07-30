import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Layout from "../Layout";
import Ham from "../Ham";

function Review() {
  const listContext = [
    {
      id: "1",
      title: "종로 아르마리오 후기",
      desc: "review1",
      desc2: `
      저는 종로 아르마리오 후기들을 보고 예랑이와 양가 아버님들 맞춤정장은
      꼭! 여기서 해야겠다하고 처음부터 마음을 먹었던지라
      다른 곳은 방문하지않고 아르마리오 종로점만 방문하였습니다.`,
      img: "http://armario.dothome.co.kr/data/1-1.jpg",
    },
    {
      id: "2",
      title: "아르마리오 상담 후기",
      desc: "review2",
      desc2: `요번에 확장해서 이전하셨는지 매장이 엄~청 깨끗하더라구요.
      상담 받는 공간이 따로 있어서 룸처럼 생긴 곳으로 들어가서 상담을 받았어요.`,
      img: "http://armario.dothome.co.kr/data/1-2.jpg",
    },
    {
      id: "3",
      title: "아르마리오 상담 후기",
      desc: "review3",
      desc2: `가봉은 다음 달에 가는데 기대되요!>_<
      아직 예복 안하신 분들 종로점 아르마리오도 한 번 가보세요!
      진짜 가성비 갑! 상담해주시는 분도 엄~~~청 친절하세요.`,
      img: "http://armario.dothome.co.kr/data/1-3.jpg",
    },
    {
      id: "4",
      title: "맞춤 정장 후기",
      desc: "review4",
      desc2: `
      신랑이 아무래도 어깨가 넓고 팔이 조금 짧은 체형이다보니까 기성복으로 맞췄으면
      아무리 수선을 했어도 맞춤만큼 예쁘게 핏이 나오진 않았을것 같아요`,
      img: "http://armario.dothome.co.kr/data/2-1.jpg",
    },
    {
      id: "5",
      title: "맞춤 정장 구두 후기",
      desc: "review5",
      desc2: `색상도 네이비로 고른게 참 잘했다 싶었습니다.
      블랙은 원래 있기도 했고 식 날은 뭔가 좀 밝아보이면 좋겠다고 생각했거든요~
      은은한 네이비색상이라 좀 밝아보이는 느낌이 있었어요
      원단 또한 신랑이 좀 욕심내서 선택한 건데 그만큼 적당히 윤기나고 비싸보이더라고요
      
      본식 날 신부부케랑 같은 꽃의 부토니에까지 꽂은 모습을 보니깐 흐뭇하더라고요^^
      정장 맞출 때 구두까지 세트로 맞춘터라 구두 걱정할 필요도 없이 무사히 잘 끝냈습니다.
      
      - 실제 고객님 리뷰 中 -`,
      img: "http://armario.dothome.co.kr/data/2-2.jpg",
    },
    {
      id: "6",
      title: "맞춤 정장 후기",
      desc: "review6",
      desc2: `수트케이스에
      깔끔하게 넣어주셔서
      이동, 보관이 편했어요 ㅎㅎㅎ
      `,
      img: "http://armario.dothome.co.kr/data/3-1.jpg",
    },
    {
      id: "7",
      title: "대여복 후기",
      desc: "review7",
      desc2: `아무래도 대여복이다보니
      사이즈가 정확하게 맞지는 않을 수 있는데
      
      바지 허리부분에 사이즈를 조절할 수 있는 장치가 있어서
      대여할 때 친절하게 설명해주셨어요:)
      
      바지 사이즈가 신랑 허리둘레에 살짝 컸는데
      조절하니까 딱 맞게 입을 수 있었어요!`,
      img: "http://armario.dothome.co.kr/data/3-2.jpg",
    },
    {
      id: "8",
      title: "대여복 후기",
      desc: "review8",
      desc2: `남자는 역시 수트핏!
      대여복이 둘 다 신랑에게 너무 잘 어울려서
      기분 좋게 촬영했어요~
      
      대여복이 1벌이었으면
      조금 아쉬울 뻔 했는데
      2벌 대여하길 잘한 듯!!
      
      강릉 1박2일 대여하고
      다음날 반납까지 무사히 완료 !
      
      아르마리오 예복 대여 덕분에
      웨딩스냅 촬영 이쁘게 잘하고 왔습니당 :)
      
      - 실제 고객님 리뷰 中 -`,
      img: "http://armario.dothome.co.kr/data/3-3.jpg",
    },
    {
      id: "9",
      title: "아르마리오 상담 후기",
      desc: "review9",
      desc2: `어떠한 강요도 없이 편견도 없이 나라별로 장단점 설명해 주시는데
      엄청난 배려가 느껴지고 편안했습니다. 감동받음 ㅠ`,
      img: "http://armario.dothome.co.kr/data/4-1.jpg",
    },
    {
      id: "10",
      title: "맞춤 정장 후기",
      desc: "review10",
      desc2: `영국의 클래식한 느낌으로 선택하고 싶었는데 가성비 완전
      훌륭하게 뽑아냈습니다!!`,
      img: "http://armario.dothome.co.kr/data/4-2.jpg",
    },
    {
      id: "11",
      title: "맞춤 정장 구두 후기",
      desc: "review11",
      desc2: `그리고 이 가격 안에 수제구두(평발인데 맞춤으로 해주니 개이득),
      스튜디오 대여 2벌, 타이, 턱시도 탈부착 서비스 까지 있습니다.
      
      - 실제 고객님 리뷰 中 -`,
      img: "http://armario.dothome.co.kr/data/4-3.jpg",
    },
    {
      id: "12",
      title: "아르마리오 상담 후기",
      desc: "review12",
      desc2: `종로 아르마리오에서는 장점을 먼저 소개해 주시면서,
      단점의 팩트를 콕 집어서 말씀해 주시더라고요.
      그래서 아무런 준비 없이 가서 들어도 충분한 이해가 됐었답니다.`,
      img: "http://armario.dothome.co.kr/data/5-1.jpg",
    },
    {
      id: "13",
      title: "맞춤 정장 후기",
      desc: "review13",
      desc2: `체크를 한 뒤에는, 샘플 바지를 하나 입고서 바지의 통,
      기장, 밑위 등등을 또 세밀하게 체크해 주셨고요.
      좀 더 나은 방향으로 가이드를 해주셔서 믿음직 스러웠습니다.
      `,
      img: "http://armario.dothome.co.kr/data/5-2.jpg",
    },
    {
      id: "14",
      title: "맞춤 정장 후기",
      desc: "review14",
      desc2: `다른 간혹 맞춤정장을 맞추긴 했었지만 이곳처럼
      만족감이 확 드는 곳은 여기 아르마리오가 처음이었네요:)`,
      img: "http://armario.dothome.co.kr/data/5-3.jpg",
    },
    {
      id: "15",
      title: "맞춤 정장 후기",
      desc: "review15",
      desc2: `남편이 약간 덩치가 있는 편이라
      핏이 잘 나올까 걱정했었는데 괜한 걱정이었습니다 !
      `,
      img: "http://armario.dothome.co.kr/data/6-1.jpg",
    },
    {
      id: "16",
      title: "맞춤 정장 후기",
      desc: "review16",
      desc2: `전반적으로 아르마리오 예복이 너무 남편이랑 잘 어울리고
      깐깐징어 남편도 만족하는거 보니 여기서 맞추길 잘했다는
      생각이 들었어요!`,
      img: "http://armario.dothome.co.kr/data/6-2.jpg",
    },
    {
      id: "17",
      title: "맞춤 정장 후기",
      desc: "review17",
      desc2: `아르마리오 예복 정말 짱짱 강추드립니다!
      직원분들도 친절하셔서 아르마리오 방문할때나 통화할때나
      언제나 기분좋았어요ㅎㅎ`,
      img: "http://armario.dothome.co.kr/data/6-3.jpg",
    },
  ];
  function Context({ id, title, desc, desc2, img }) {
    return (
      <li id={id} className="maru">
        <span className="review_img"></span>
        <span className="review_list">
          <strong className="maru">{title}</strong>
          <em>{desc}</em>
        </span>
        <span className="more">
          <Link
            to={{
              pathname: "/modal",
              state: { id, title, desc, desc2, img },
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
            <div className="sub_tit review">
              <h1>EVENT</h1>
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
                      img={txt.img}
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
