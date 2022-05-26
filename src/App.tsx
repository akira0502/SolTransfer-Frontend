import React from 'react';
import Home from './home'
import Choice from './choice'
import Selectdrone from './selectdrone'
import Dashboard from './dashboard'
import './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/choice' element={<Choice />} />
          <Route path='/selectdrone' element={<Selectdrone />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;