import React, { useEffect, useState } from "react";
import ReactProjectList from "../../components/reactProduct/item";
import { Container, Row, Col } from "react-bootstrap";

const ReactProject = () => {
  const [projectList, setProjectList] = useState([]);

  const getProjects = async () => {
    // let keyword = query.get("q") || "";
    let url = `http://localhost:3000/react`;
    let response = await fetch(url);
    let data = await response.json();
    setProjectList(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h2>리액트 프로젝트 목록</h2>
      <Container>
        <Row>
          {projectList.map((list) => (
            <Col sm={6} lg={3}>
              <ReactProjectList item={list} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ReactProject;
