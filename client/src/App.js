import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Fib from './Fib';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/fibCalc"> Fib Calc </Link>
          <Link to="/documentation">Documentation</Link>
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/fibCalc" component={Fib} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
