import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Logpessoa from './pages/log/Logpessoa';
import CheckIn from './pages/checkin/CheckIn';
import erro from './pages/404/404'


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/erro" component={erro} />
        <Route path="/log" component={Logpessoa}></Route>
        <Route path="/checkin" component={CheckIn}></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();