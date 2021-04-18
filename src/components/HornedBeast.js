import React from "react";
import { Card, Button } from "react-bootstrap";
import SelectedBeast from './SelectedBeast';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showModal: false
    };
  };

  addLike = () => this.setState({ likes: this.state.likes + 1 });

  onOpen = () => this.setState({ showModal: true });

  onClose = () => this.setState({ showModal: false });

  render() {
    return (
      <>
        <Card style={{ minWidth: "18rem", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "space-around", padding: "10px" }}>
          <Card.Img 
          variant="top" 
          src={this.props.img} 
          alt="" 
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          onClick={this.onOpen}  />
          <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "space-around" }} >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Button onClick={this.addLike} variant="primary">{`Favorite: ${this.state.likes}`}</Button>
          </Card.Body>
        </Card>
        <SelectedBeast 
        show={this.state.showModal} 
        onClose={this.onClose}
        title={this.props.title}
        description={this.props.description}
        img={this.props.img}
         />
      </>
    );
  }
}

export default HornedBeast;
