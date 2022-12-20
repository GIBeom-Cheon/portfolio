import React from "react";
import "./index.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const About = () => {
  return (
    <Container className="aboutContainer">
      <Row className="row">
        {/* <div className="tri tri1"></div>
        <div className="tri tri2 "></div>
        <div className="tri tri3 "></div>
        <div className="tri tri4 "></div>
        <div className="tri tri5 "></div>
        <div className="tri tri6 "></div> */}
        <Col>
          <div className="circle">
            <div className="myPhoto" src="./img/gi.jpg" alt="본인사진">
              {" "}
            </div>
          </div>
        </Col>
        <Col>
          <div className="rightSide">
            <div className="name">천기범 (CHEON GIBEOM) bgc753@gmail.com</div>
            <div className="desc">
              20. 07 | ITQ 파워포인트, 엑셀, 한글 자격증
              <br />
              21. 07 | 라운즈 데이터 관리
              <br />
              22. 01 | IT 스타트업 기업 'PERFIT' 데이터관리
              <br />
              23. 01 | 프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자
              양성과정 수료
              <br />
            </div>
            <div className="tool">
              Tools&nbsp;&nbsp;:&nbsp;&nbsp;html, css, javascript, jquery,
              figma, react
            </div>
          </div>
          <button className="resumeBox">
            <div className="resume">Resume</div>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
