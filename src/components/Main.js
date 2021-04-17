import HornedBeast from "./HornedBeast.js";
import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
;

class Main extends React.Component {

  render() {
    return (
        <CardDeck>
          {this.props.data.map((i, index) => (
            <HornedBeast
              title={i.title}
              description={i.description}
              img={i.image_url}
              index={index}
              close={this.props.close}
              open={this.props.open}
              show= {this.props.show}
            />
          ))}
        </CardDeck>
    );

  }
}

export default Main;
