import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import store from './store';

import Home from './containers/Home';
import UserPhotos from './containers/UserPhotos';

import Footer from './containers/Footer';
import SideBar from './containers/SideBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Wrapper = styled.div`
  height: 100vh;
`;
const ContentWrapper = styled.div`
  width: calc(100vw - 360px);
  height: calc(100vh - 65px);
  margin-left: 360px;
`;

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <Wrapper>
              <Helmet>
                <meta charSet="utf-8" />
                <title>XOTV FrontEnd TEST</title>
              </Helmet>
              <Wrapper>
                <SideBar />
                <ContentWrapper>
                  <Route exact path="/photos" component={UserPhotos} />
                  <Route exact path="/" component={Home} />
                </ContentWrapper>
                <Footer />
              </Wrapper>
            </Wrapper>
          </Router>
        </Provider>
    );
  }
}

export default App;
