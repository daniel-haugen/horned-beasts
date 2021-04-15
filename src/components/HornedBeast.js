import React from "react";
import { Card, Button } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  addLike = () => this.setState({ likes: this.state.likes + 1 });

  render() {
    return (
      <>
        <Card style={{ minWidth: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} alt="" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Button onClick={this.addLike} variant="primary">{`Favorite: ${this.state.likes}`}</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
