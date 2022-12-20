import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProfileDetail = () => {
  const [project, setProject] = useState(null);
  let { id } = useParams();

  const getProjectDetail = async () => {
    let url = `http://localhost:3000/react/${id}`;
    let response = await fetch(url); //브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
    let data = await response.json();
    setProject(data);
  };

  useEffect(() => {
    getProjectDetail();
  }, );

  return (
    <Container>
      <Row>
        <Col>
          <div className="leftBox">
            <a href="https://gibeom-cheon.github.io/SNS-SASS-/" alt="깃허브주소">
              <div className="img-container">
                <img src={project?.img} alt="" />
              </div>
            </a>
          </div>
        </Col>
        <Col>
          <div className="rightBox">
            <div>{project?.title}</div>
            <div>{project?.skill}</div>
            <div>{project?.desc}</div>
            <div>{project?.tool}</div>
            <div>{project?.link}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetail;
