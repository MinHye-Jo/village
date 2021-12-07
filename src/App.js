import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { isIE, isEdge } from "react-device-detect";
import { RecoilRoot } from "recoil";
import ReactGA from "react-ga";

import Header from "./screens/frame/Header";
// 기본 메인
import Index from "./screens/Index";
// 카운트다운 들어간 메인
import Main from "./screens/Main";
// 오픈 1차 메인
import MainOpen1st from "./screens/MainOpen1st";
// 오픈 1차 마감 메인
import MainOpen1stClosing from "./screens/MainOpen1stClosing";
// 오픈 2차 메인
import MainOpen2st from "./screens/MainOpen2st";
// 오픈 2차 마감 메인
import MainOpen2stClosing from "./screens/MainOpen2stClosing";
// 오픈 3차 메인
import MainOpen3st from "./screens/MainOpen3st";

import AboutProject from "./screens/AboutProject";
import Roadmap from "./screens/Roadmap";
import TeamMember from "./screens/TeamMember";
import Collection from "./screens/Collection";
import ContinentalMap from "./screens/ContinentalMap";
import Guide from "./screens/Guide";
import Faq from "./screens/Faq";
import ComingSoon from "./screens/ComingSoon";
import Footer from "./screens/frame/Footer";

function App() {
  ReactGA.initialize("UA-213354172-1");
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        {isIE || isEdge ? alert("IE / Edge is not supported. Download Chrome/Opera/Firefox") : null}
        <Route exact path="/" component={Main} />
        <Route exact path="/test/:pId?" component={Main} />
        <Route path="/Collection" component={Collection} />
        <Route path="/AboutProject" component={AboutProject} />
        <Route path="/Roadmap" component={Roadmap} />
        <Route path="/ComingSoon" component={ComingSoon} />
        <Route path="/TeamMember" component={TeamMember} />
        <Route path="/ContinentalMap" component={ContinentalMap} />
        <Route path="/Guide" component={Guide} />
        <Route path="/Faq" component={Faq} />
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
