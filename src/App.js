import React from 'react';
import './App.css';
import Home from './containers/home.js';
import Template from './containers/template.js';
import {Container} from './components/styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
 
    return (
      <Container>
        <Router>
          <Switch>
          <Route path="/edit/:existing_id">
              <Template />
            </Route>
          <Route path="/new">
              <Template  />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
  
        </Router>
      </Container>
    );
  
  
}

export default App;
