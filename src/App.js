import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import * as S from "./style";
import * as C from "./components";

function App() {
  return (
    <div className="App">
      <S.Body>
        <S.View>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<P.Main />} />
              <Route path="/fortune" element={<P.Fortune />} />
              <Route path="/match" element={<P.Match />} />
              <Route path="/match/result/:id" element={<P.SharedMatch />} />
              <Route path="/match/result" element={<P.MatchResult />} />
              <Route path="*" element={<P.NotFound />} />
              <Route path="/loading" element={<C.Loading />} />
              <Route path="/fortune/result" element={<P.ResultFortunePage />} />
              <Route path="/fortune/result/:id" element={<P.SharedFortune />} />
            </Routes>
          </BrowserRouter>
        </S.View>
      </S.Body>
    </div>
  );
}

export default App;
