import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Images from "./Images";
import { IMAGE_DATA } from "./imageData";

const ProjectCarousel = () => {
  // 나중에 인덱스가 아닌, id 값에 따라서 백엔드에서 다른 값을 가져올 수 있도록 할 수 있겠다.

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <Slider {...settings}>
      {IMAGE_DATA.map(({ name, links }) => {
        return (
          <Project key={name}>
            <Header>{name}</Header>
            <Content>
              <ImageBox>
                <Images imgLinks={links} />
              </ImageBox>
              <div>오오오오</div>
            </Content>
          </Project>
        );
      })}
    </Slider>
  );
};

export default ProjectCarousel;

const Project = styled.div`
  padding: 40px 60px;
  color: black;
`;

const Header = styled.div`
  padding-bottom: 50px;
  font-size: 30px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 350px;
`;
