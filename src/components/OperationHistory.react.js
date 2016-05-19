

import React, { Component } from 'react';
import { Row, PageHeader, Col, Table } from 'react-bootstrap';

class OperationHistory extends Component {
  render() {
    return (
      <Row>
        <PageHeader>History</PageHeader>
        <Col md={12}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Operation</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>1 + 2</td>
                <td>3</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default OperationHistory;
