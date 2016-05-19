

import React, { Component, PropTypes } from 'react';
import { Row, PageHeader, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class OperationHistory extends Component {
  static propTypes = {
    history: PropTypes.array.isRequired,
  }

  render() {

    const { history } = this.props;

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
              {history.map((item, index) => {
                return (
                    <tr>
                      <td>{index}</td>
                      <td>{item.operand}</td>
                      <td>{item.result}</td>
                    </tr>
                 );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default connect(state => ({
  history: state.operation
}))(OperationHistory);
