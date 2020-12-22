import './App.css';
import AppRouter from './routers/AppRouter';
import React from 'react';
import { Provider } from 'react-redux';
import { generateStore } from './redux/rootStore';
import rootSaga from './redux/rootSagas';
import Header from './components/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import MainPlayer from './components/MainPlayer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const store = generateStore();

  store.runSaga(rootSaga);

  return (
    <Provider store={store}>
      <Router basename="unofficial-deezer">
        <Header />
        <Container fluid>
          <Row>
            <Col xs={3}>
              <Sidebar />
            </Col>
            <Col>
              <AppRouter />
            </Col>
          </Row>
          <Row>
            <MainPlayer />
          </Row>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
