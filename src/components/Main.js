import HornedBeast from './HornedBeast.js';
import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import BeastForm from './BeastForm.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0 // for example
    }
  }

  render() {
    return (
      <>
        <BeastForm />
        <CardDeck>
          {this.props.data.map((i) => (
            <HornedBeast
              title={i.title}
              description={i.description}
              img={i.image_url}
              horns={i.horns}
            />
          ))}
        </CardDeck>
      </>
    );
  }
}

export default Main;
