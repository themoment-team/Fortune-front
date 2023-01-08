import * as S from "./style";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SharedFortune = () => {
  const params = useParams();
  const [fortuneText, setFortuneText] = useState("");
  const [fortuneBox, setFortuneBox] = useState(false);

  const navigate = useNavigate();

  const getResult = async (url) => {
    const { data } = await axios({
      url: url,
      method: "post",
    });
    console.log(data);
    setFortuneText(data);
  };

  const ShowFortuneResult = () => {
    return (
      <S.ShowFortuneBox>
        <S.ResultTitle>운세 결과</S.ResultTitle>
        <S.CloseFortune
          onClick={() => {
            setFortuneBox(false);
          }}
        >
          X
        </S.CloseFortune>
        <S.ResultFortune>
          <S.ResultText>{fortuneText?.fortune}</S.ResultText>
        </S.ResultFortune>
      </S.ShowFortuneBox>
    );
  };
  useEffect(() => {
    console.log(params.id);
    const url = `https://server.todaysfortune.site/fortune/info/${params.id}`;
    getResult(url);
  }, []);

  return (
    <S.Container>
      {fortuneBox && (
        <>
          <ShowFortuneResult />
          <S.WrapButton>
            <S.MainButton onClick={() => navigate("/", {})}>
              나도 해보자!
            </S.MainButton>
          </S.WrapButton>
        </>
      )}
      <S.BackgroundImg
        onClick={() => {
          setFortuneBox(true);
        }}
      ></S.BackgroundImg>
    </S.Container>
  );
};

export default SharedFortune;
