import React, {useState, useEffect} from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch("/api")
    .then((res)=>res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
          <Contacts />



        </div>

  );

}


export default App;
