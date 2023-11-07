import React, {useState, useEffect} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'

function App() {
  // const [node, setNode] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:9092/get-node?id=0')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setNode(data);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   })
  // })

  return (
    <div className="App">
    <BrowserRouter>
      <Navigation/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App;
