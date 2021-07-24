
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
