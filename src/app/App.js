import React, { Component } from 'react';
import './App.css';
import { Router} from "react-router-dom";
import Header from '../global-components/header';
import Footer from '../global-components/footer';
import RouterConfig from "../components/RouterConfig";
import history from '../history/history';

import Cta from '../components/inner-component/cta';

class App extends Component {
  render() {
    return (
      <Router history={history}>    
    <div>
      <Header />
      <hr />
      <RouterConfig />
      <Cta />
      < Footer />
    </div>
  </Router>
    );
  }
}

export default App;
