
import './MainPage.scss';
import React, { Component } from 'react';
import OperandInput from './OperandInput.react';
import OperationHistory from './OperationHistory.react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CalcStorm</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={12}>
              <OperandInput />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <OperationHistory />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MainPage;
