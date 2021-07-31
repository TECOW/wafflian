import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import About from "./About";
import Menus from "./Menus";
import Contacts from "./Contacts";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contacts} />
        <Route path="/menu" component={Menus} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
