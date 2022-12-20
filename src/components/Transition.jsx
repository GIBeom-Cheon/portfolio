import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Navbar.scss";
import LogoPage from "../pages/index";
import Home from "./../pages/home/index";
import About from "./../pages/about/index";
import Skill from "./../pages/skill/index";
import ReactDetail from "./../pages/react/[id]";
import ReactPj from "./../pages/react/index";
import WebDetail from "./../pages/web/[id]";
import WebPj from "./../pages/web/index";

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route exact path="/" element={<LogoPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/react" element={<ReactPj />} />
          <Route path="/react/:id" element={<ReactDetail />} />
          <Route path="/web" element={<WebPj />} />
          <Route path="/web/:id" element={<WebDetail />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
