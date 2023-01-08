import styled from "styled-components";
import fortuneResultImg from "../../imgs/fortuneResultImg.png";

export const Container = styled.div`
  width: 720px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const BackgroundImg = styled.div`
  width: 600px;
  height: 600px;
  background-image: url(${fortuneResultImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: 83vw;
    height: 83vw;
  }
`;

export const ShowFortuneBox = styled.div`
  width: 600px;
  height: 360px;
  border-radius: 7%;
  background-color: #fff;
  z-index: 99999999;
  position: absolute;
  top: 36%;
  @media screen and (max-width: 720px) {
    width: 83vw;
    height: 50vw;
    top: 300px;
  }
`;

export const ResultFortune = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseFortune = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  background: none;
  color: #8f85ff;
  font-size: 200%;
  border: none;
  position: absolute;
  top: 4%;
  right: 5%;
  cursor: pointer;
  @media screen and (max-width: 720px) {
  }
`;

export const ResultText = styled.p`
  font-size: 30px;
`;
export const ResultTitle = styled.h1`
  color: #8f85ff;
`;

export const WrapButton = styled.div`
  width: 600px;
  bottom: 4%;
  display: flex;
  position: absolute;

  justify-content: space-between;
  @media screen and (max-width: 720px) {
    width: 83vw;
  }
`;

export const MainButton = styled.button`
  width: 250px;
  height: 93px;
  background-color: #e8ebf2;
  z-index: 9999;
  margin: 0 auto;
  border: none;
  font-size: 200%;
  color: #8f85ff;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: 34vw;
    height: 14vw;
    font-size: 5vw;
  }
`;
