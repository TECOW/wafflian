import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch("/api")
    .then((res)=>res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">

      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
