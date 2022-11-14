import React from "react";
import styled from "styled-components";
import ProjectType from "./type/ProjectType";

const Description: React.FC<ProjectType> = ({
  summary,
  main_function,
  skills,
  git,
  result,
}) => {
  return (
    <Container>
      <Summary>{summary}</Summary>
      <Box>
        <Key>주요 기능 : </Key>
        {main_function.map((ele) => (
          <div>- {ele}</div>
        ))}
      </Box>
      <Box>
        <Key>사용된 기술 : </Key>
        {skills.map((skill) => {
          return <Skill>{skill}</Skill>;
        })}
      </Box>

      <Box>
        <Key>Git : </Key>
        <a href={git}>GitLink</a>
      </Box>

      {result ? (
        <Box>
          <Key>Result : </Key>
          <a href={result}>SiteLink</a>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Description;

const Container = styled.div`
  width: 410px;
  height: 430px;
  margin-left: 30px;
  line-height: 25px;
`;

const Summary = styled.div`
  word-wrap: break-word;
`;

const Box = styled.div`
  margin: 10px 0;

  a {
    color: black;
  }
`;

const Key = styled.span`
  font-weight: bold;
`;
const Skill = styled.div`
  display: inline-block;
  margin: 2px 3px;
  padding: 0px 3px;
  color: whitesmoke;
  background-color: ${(props) => props.theme.blue};
  border-radius: 5px;
`;
