import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Images from "./Images";
import Description from "./Description";

import ProjectType from "./type/ProjectType";

const ProjectCarousel = ({ data }: { data: ProjectType[] | undefined }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <Slider {...settings}>
      {data?.map(
        (
          {
            name,
            links,
            summary,
            main_function,
            skills,
            retrospective,
            git,
            result,
          },
          i
        ) => {
          return (
            <Container key={name}>
              <Header>- {name} -</Header>
              <Content>
                <Images imgLinks={links} />
                <Description
                  summary={summary}
                  main_function={main_function}
                  skills={skills}
                  retrospective={retrospective}
                  git={git}
                  result={result}
                />
              </Content>
              <Footer className="footer">
                {i + 1} / {data?.length}
              </Footer>
            </Container>
          );
        }
      )}
    </Slider>
  );
};

export default ProjectCarousel;

const Container = styled.div`
  padding: 40px 10px 20px 10px;
  color: black;
  position: relative;
`;

const Header = styled.div`
  padding-bottom: 50px;
  font-size: 30px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 410px;
`;
