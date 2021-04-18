import React from "react";
import Form from "react-bootstrap/Form";

class BeastForm extends React.Component {
  render() {
    return(
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How Many Horns:</Form.Label>
          <Form.Control as="select">
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}
export default BeastForm;
