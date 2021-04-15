import HornedBeast from "./HornedBeast.js";
import React from "react";
import { CardDeck, Container } from "react-bootstrap";

class Main extends React.Component {
  render() {
    return (
        <CardDeck>
          {this.props.data.map((i) => (
            <HornedBeast
              title={i.title}
              description={i.description}
              img={i.image_url}
            />
          ))}
        </CardDeck>
    );
  }
}

export default Main;
