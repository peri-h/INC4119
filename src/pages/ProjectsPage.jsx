import React from "react";
import ProjectCard from "../components/ProjectCard";
import Calculator from "../components/Calculator"
/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "계산기 프로젝트",
      description: "simple calculator",
      reactComponent: <Calculator/>,
    },
    {
      title: "나의 프로젝트2",
      description: "캡스톤 프로젝트에서의 딥러닝 기반 영상 분류 시스템",
    },
    {
      title: "나의 프로젝트3",
      description: "나만의 맛집 저장리스트 ~~",
      link: "https://map.naver.com/p/entry/place/18697937?c=15.00,0,0,0,dh",
    },
    
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            reactComponent={project.reactComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
