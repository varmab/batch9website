import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ServicesPage from './containers/ServicesPage'
import CareersPage from './containers/CareersPage'
import ContactPage from './containers/ContactPage'
import TermsPage from './containers/TermsPage'
import PrivacyPage from './containers/PrivacyPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/services" component={ServicesPage}/>
          <Route exact path="/careers" component={CareersPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/terms" component={TermsPage}/>
          <Route exact path="/privacy" component={PrivacyPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
