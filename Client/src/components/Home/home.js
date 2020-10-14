import React from "react";

import "./home.css";
import Grants from "../grants/Grants";
import { Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      redirect: false,
      message: "",
    };
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={{ size: 10, offset: 1 }}>
            <br></br>
            <Grants />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
