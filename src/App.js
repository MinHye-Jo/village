import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { isIE, isEdge } from "react-device-detect";
import { RecoilRoot } from "recoil";
import ReactGA from "react-ga";

import Header from "./screens/frame/Header";
import Main from "./screens/Main";

import AboutProject from "./screens/AboutProject";
import Roadmap from "./screens/Roadmap";
import TeamMember from "./screens/TeamMember";
import Collection from "./screens/Collection";
import ContinentalMap from "./screens/ContinentalMap";
import VillageMap from "./screens/VillageMap";
import Guide from "./screens/Guide";
import Map from "./screens/Map";
import Faq from "./screens/Faq";
import ComingSoon from "./screens/ComingSoon";
import EventChristmas from "./screens/EventChristmas";
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
        <Route path="/Collection" component={Collection} />
        <Route path="/Map" component={Map} />
        <Route path="/AboutProject" component={AboutProject} />
        <Route path="/Roadmap" component={Roadmap} />
        <Route path="/ComingSoon" component={ComingSoon} />
        <Route path="/TeamMember" component={TeamMember} />
        <Route path="/ContinentalMap" component={ContinentalMap} />
        <Route path="/VillageMap" component={VillageMap} />
        <Route path="/Guide" component={Guide} />
        <Route path="/Faq" component={Faq} />
        <Route path="/EventChristmas" component={EventChristmas} />
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
