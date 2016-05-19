
import React, { Component, PropTypes } from 'react';
import { Row, Col, PageHeader, Form,
  FormGroup,
  FormControl, DropdownButton, MenuItem
} from 'react-bootstrap';
import * as operationActions from '../actions/operation';
import { connect } from 'react-redux';

class OperandInput extends Component {
  static propTypes = {
    addOperation: PropTypes.func.isRequired,
  }

  onSelect = (obj) => {

  }

  render() {
    return (
      <Row>
        <PageHeader>Input</PageHeader>
        <Col md={12}>
          <Form inline>
            <FormGroup controlId="formOperand1">
              <FormControl ref="input_one" type="number" placeholder="Operand1" />
            </FormGroup>
            {' '}
            <FormGroup controlId="formOperand2">
              <FormControl ref="input_two" type="number" placeholder="Operand2" />
            </FormGroup>
            {' '}
            <DropdownButton title={"Calculate"} onSelect={this.onSelect} id={3}>
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
