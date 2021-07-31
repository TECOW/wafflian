import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Menus from "./components/Menus";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer.jsx";

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
