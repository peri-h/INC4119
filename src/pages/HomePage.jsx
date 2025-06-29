import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = ({setCurrentPage}) => {
  const features = [
    {
      title: "소개",
      description: "제 소개입니다.",
      page: "about",
    },
    {
      title: "프로젝트",
      description: "제가 만든 프로젝트들 입니다.",
      page: "projects",
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
      page:"contact",
    },
    {
      title: "개인 블로그",
      description: "IT 제품/인테리어/취미 블로그",
      externLink: "https://idk-btw.tistory.com",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            onClick={()=> {
              if(feature.externLink){
                window.open(feature.externLink, "_blank");
              } else{
                setCurrentPage(feature.page)
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
