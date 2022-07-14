import { Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";

const Box = ({ color, link, children }) => {
  console.log(children);
  return (
    <Container bgColor={color} link={link}>
      {React.cloneElement(children, { style: { color: color } })}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  margin-bottom: 20px;
  background-color: ${(props) => props.bgColor + "40"};
  border: ${(props) => props.bgColor + "1f"};
  border-radius: 4px;
  height: 100px;
  width: 200px;
  transform: scale(1);
  z-index: 0;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border: ${(props) => props.bgColor + "1f"};
    border-radius: 4px;
    height: 100%;
    opacity: 0;
    z-index: 1;
    background-image: url(${(props) => props.link});
    background-repeat: no-repeat;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;
    background-position: 50% 0;
    background-size: cover;
  }

  &:hover {
    color: #ffffff00;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;
    transform: scale(1.05);

    &:after {
      opacity: 1;
    }
  }
`;

export default Box;
