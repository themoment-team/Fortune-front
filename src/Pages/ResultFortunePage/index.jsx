import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

const ResultFortune = () => {
  const [fortuneBox, setFortuneBox] = useState(false);
  const [showText, setShowText] = useState("");
  const [fortuneId, setFortuneId] = useState("");
  const [resultFortune, setResultFortune] = useState("");
  const navigate = useNavigate();

  const getFortune = async () => {
    const { data } = await axios({
      url: "https://server.todaysfortune.site/fortuneData/randomFortune",
      method: "get",
    });
    console.log(data);
    setShowText(data);
    setFortuneId(parseInt(Math.random() * 100000000000000000));
    setResultFortune(data[0].fortuneData);
    console.log(data);
  };

  const saveFortune = async () => {
    await axios({
      url: "https://server.todaysfortune.site/fortune/save",
      method: "post",
      data: fortuneInfo,
    });
    console.log("이정우", fortuneInfo);
  };
  const shareFortune = async () => {
    const { data } = await axios({
      url: `https://server.todaysfortune.site/fortune/info/${fortuneId}`,
      method: "post",
    });
    console.log("하이", data);
  };

  useEffect(() => {
    saveFortune();
  }, [resultFortune]);

  const fortuneInfo = {
    fortune: resultFortune,
    randomValue: fortuneId.toString(),
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
          <S.ResultText>{showText[0]?.fortuneData}</S.ResultText>
        </S.ResultFortune>
      </S.ShowFortuneBox>
    );
  };

  return (
    <div>
      <S.Container>
        {fortuneBox && (
          <>
            <ShowFortuneResult />
            <S.WrapButton>
              <S.ReturnButton onClick={() => navigate("/")}>
                돌아가기
              </S.ReturnButton>
              <CopyToClipboard
                text={`https://server.todaysfortune.site/fortune/result/${fortuneId}`}
                onCopy={() => alert("클립보드에 링크가 복사되었습니다.")}
              >
                <S.ShareButton>공유하기</S.ShareButton>
              </CopyToClipboard>
            </S.WrapButton>
          </>
        )}
        <S.BackgroundImg
          onClick={() => {
            setFortuneBox(true);
            getFortune();
          }}
        ></S.BackgroundImg>
      </S.Container>
    </div>
  );
};

export default ResultFortune;
