import HornedBeast from "./HornedBeast.js";
import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import BeastForm from "./BeastForm.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornsFilter: 0
    };
  }

  filterChangeHandler = e => this.setState({hornsFilter: parseInt(e.target.value)});
  

  render() {
    return (
      <>
        <BeastForm filter={this.filterChangeHandler}  />
        <CardDeck>
          
          {this.state.hornsFilter === 0 ? this.props.data.map((i, index) => (
            <HornedBeast
              title={i.title}
              description={i.description}
              img={i.image_url}
              horns={i.horns}
              key={index}
            />
          )) : this.props.data.filter(hornedBeast => hornedBeast.horns === this.state.hornsFilter).map((i, index) => (
            <HornedBeast
              title={i.title}
              description={i.description}
              img={i.image_url}
              horns={i.horns}
              key={index}
            />
          ))
            };          
          
        </CardDeck>
      </>
    );
  }
}

export default Main;
