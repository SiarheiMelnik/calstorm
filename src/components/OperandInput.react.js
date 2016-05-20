
import React, { Component, PropTypes } from 'react';
import {
  Row, Col, PageHeader,
  Form,
  FormGroup,
  DropdownButton, MenuItem
} from 'react-bootstrap';
import * as operationActions from '../actions/operation';
import { connect } from 'react-redux';

class OperandInput extends Component {
  static propTypes = {
    addOperation: PropTypes.func.isRequired,
  }

  onSelect = (operand) => {
    const { input_one, input_two } = this.refs;
    const { addOperation } = this.props;
    addOperation({ operand, input: [+input_one.value, +input_two.value] });
  }

  render() {
    return (
      <Row>
        <PageHeader>Input</PageHeader>
        <Col md={12}>
          <Form inline>
            <FormGroup>
              <input
                className="form-control"
                ref="input_one"
                type="number"
                placeholder="Operand1"
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <input
                className="form-control"
                ref="input_two"
                type="number"
                placeholder="Operand2"
              />
            </FormGroup>
            {' '}
            <DropdownButton title={"Choose operand"} onSelect={this.onSelect} id={3}>
              <MenuItem eventKey="sum">+ (sum)</MenuItem>
              <MenuItem eventKey="divide">/ (divide)</MenuItem>
              <MenuItem eventKey="remainder">% (remainder of a division)</MenuItem>
            </DropdownButton>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default connect(null, operationActions)(OperandInput);
