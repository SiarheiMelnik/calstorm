
import './MainPage.scss';
import React, { Component } from 'react';
import OperandInput from './OperandInput.react';
import OperationHistory from './OperationHistory.react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

class MainPage extends Component {
  render() {
    const { Header, Brand } = Navbar;

    return (
      <div>
        <Navbar>
          <Header>
            <Brand>
              <a href="#">CalcStorm</a>
            </Brand>
          </Header>
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
