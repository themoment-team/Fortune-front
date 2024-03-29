import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const ContainerText = styled.div`
  font-size: 100px;
  color: RGB(143, 133, 255);
  @media screen and (max-width: 720px) {
    font-size: 70px;
  }
`;

export const ContainerTitle = styled.div``;

export const ContainerButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 50vh;
  width: 25vw;
`;

export const ContainerButton = styled.button`
  font-size: 50px;
  width: 400px;
  height: 13vh;
  border-radius: 60px;
  border: 0;
  box-shadow: 10px 10px 30px 2px RGB(215, 220, 231), -12px -10px 40px 1px white;
  color: RGB(143, 133, 255);
  background-color: RGB(239, 241, 245);
  font-family: "MaplestoryOTFBold";
  cursor: pointer;
  transition: ease-in-out 0.1s;
  @media screen and (max-width: 720px) {
    font-size: 30px;
    width: 200px;
  }
  &:hover {
    font-size: 53px;
    scale: 1.05;
  }
`;
