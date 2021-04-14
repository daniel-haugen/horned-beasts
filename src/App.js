import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// import Container from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Header  />
      <Main title="" imageURL= "" description="" />
      <Footer />
    </Container>
  );
}

export default App;
