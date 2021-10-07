import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./component/assets/Nav/Nav";
import Swich from "./component/assets/Swich/Swich";
import "./App.scss";
import Preloader from "./component/assets/Preloader/Preloader";
import Home from "./component/Page/Home/Home";
import Portfolio from "./component/Page/Portfolio/Portfolio";
import Resume from "./component/Page/Resume/Resume";
import Contact from "./component/Page/Contact/Contact";
import Blog from "./component/Page/Blog/Blog";
import Error from "./component/Page/Error/Error";
const App = () => {
  return (
    <Router>
      <div className="trm-app-frame">
        <Preloader />
        <div id="trm-dynamic-content" className="trm-swup-animation">
          <div
            id="trm-scroll-container"
            className="trm-scroll-container"
            data-scroll-container
            style={{ opacity: 0 }}
          >
            <div
              data-scroll-section
              id="content"
              className="trm-scroll-section"
            >
              <Nav />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/blog/:o">
                  <Blog />
                </Route>
                <Route path="*">
                  <Error />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <Swich />
      </div>
    </Router>
  );
};

export default App;
