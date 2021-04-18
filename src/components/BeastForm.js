import React from "react";
import Form from "react-bootstrap/Form";

class BeastForm extends React.Component {

  render() {
    return(
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How Many Horns:</Form.Label>
          <Form.Control as="select" onChange={this.props.filter}>
            <option value='0'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}
export default BeastForm;
