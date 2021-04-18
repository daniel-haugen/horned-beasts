import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemList from "./data.json";




class App extends React.Component {

  render() {
  return (
    <Container fluid>
      <Header  />
      <Main data={ItemList} />
      <Footer />
    </Container>
  );
}
}

export default App;
