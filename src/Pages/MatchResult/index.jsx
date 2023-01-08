import * as S from "./style";
import { useLocation, Link } from "react-router-dom";
import heart from "../../imgs/heart.png";
import { useState, useEffect } from "react";
import MatchLoading from "../MatchLoading";
import { counting } from "./hangul";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

let random = 0;
const MatchResult = () => {
  const [delay, setDelay] = useState(true); //로딩 화면 확인 변수

  const location = useLocation(); // 파라미터를 받기 위함
  const props = location.state;

  let name1 = [props.names[0][0], props.names[0][1], props.names[0][2]]; // 첫 번째 이름을 획마다 나눈것
  let name2 = [props.names[1][0], props.names[1][1], props.names[1][2]]; // 두 번째 이름을 획마다 나눈것

  const [result, setResult] = useState("99"); // 궁합 결과 설정

  const getMatch = (userNames) => {
    // 궁합을 보는 로직이 있는 함수
    let matchResult2 = []; // 반복문을 돌면서 결과가 나오는 과정에 필요한 공간
    let final; // 최종 결과
    for (let i = 0; i < 4; i++) {
      // 각 획수를 비교하는 과정을 전체적으로 4번 반복함
      if (i % 2 === 0)
        // 2회 반복될 때마다 저장 공간 교체
        for (let j = 0; j < 5 - i; j++) {
          // 점차 반복 횟수가 줄어들게(아래로 뾰족한 삼각형처럼)
          matchResult2[j] = (userNames[j] + userNames[j + 1]) % 10; // j인덱스에 있는 획수와 그 다음 인덱스에 있는 획수를 더해서 10으로 나눈 나머지를 구함
        }
      else
        for (let j = 0; j < 5 - i; j++) {
          // 점차 반복 횟수가 줄어들게(아래로 뾰족한 삼각형처럼)
          userNames[j] = (matchResult2[j] + matchResult2[j + 1]) % 10; // j인덱스에 있는 획수와 그 다음 인덱스에 있는 획수를 더해서 10으로 나눈 나머지를 구함
        }
    }
    final = `${userNames[0]}${userNames[1]}`; // 문자열로 변환해서 저장
    setResult(final);
    const url = "https://server.todaysfortune.site/compatibility/save";
    getResult(url, final);
  };

  const getResult = async (url, final) => {
    random = Math.random() * 100000000000000000;
    const userName1 = props.names[2];
    const userName2 = props.names[3];
    const data = {
      compatibility: final,
      name1: userName1,
      name2: userName2,
      randomValue: random,
    };
    try {
      const res = await axios.post(url, data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => setDelay(false), 3000); // 3초동안 로딩
    name1 = counting(name1); // 각 획수를 센다
    name2 = counting(name2); // 각 획수를 센다
    const userNames = [
      name1[0],
      name2[0],
      name1[1],
      name2[1],
      name1[2],
      name2[2],
    ];
    getMatch(userNames); // 결과를 구한다
  }, []);

  function isMobileYn() {
    var filter = "win16|win32|win64|mac|macintel";
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  return (
    <div>
      {delay ? (
        <MatchLoading></MatchLoading>
      ) : (
        <S.Container>
          <S.VioletText>
            {props.names[2]}님과 {props.names[3]}님의 궁합은?
          </S.VioletText>
          <S.HeartDiv>
            <S.RelativeText>{result}%</S.RelativeText>
            <S.ViewPicture src={heart} />
          </S.HeartDiv>
          <S.ButtonBox>
            <Link
              to={{ pathname: "/match" }}
              style={{ textDecoration: "none" }}
            >
              <S.TextContainer>돌아가기</S.TextContainer>
            </Link>
            <S.TextContainer>
              <CopyToClipboard
                text={`https://todaysfortune.site/match/result/${random}`}
                onCopy={() => alert("클립보드에 링크가 복사되었습니다.")}
              >
                <p>공유하기</p>
              </CopyToClipboard>
            </S.TextContainer>
          </S.ButtonBox>
        </S.Container>
      )}
    </div>
  );
};

export default MatchResult;
