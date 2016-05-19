
import React, { Component } from 'react';
import { Row, Col, PageHeader, Form,
  FormGroup,
  FormControl, DropdownButton, MenuItem
} from 'react-bootstrap';

class OperandInput extends Component {
  onSelect = (obj) => {
    console.log('SELECT', obj);
  }
  render() {
    return (
      <Row>
        <PageHeader>Input</PageHeader>
        <Col md={12}>
          <Form inline>
            <FormGroup controlId="formOperand1">
              <FormControl type="number" placeholder="Operand1" />
            </FormGroup>
            {' '}
            <FormGroup controlId="formOperand2">
              <FormControl type="number" placeholder="Operand2" />
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

export default OperandInput;
