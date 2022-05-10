import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import LogUsuario from './pages/logusuario/LogUsuario';
import CheckIn from './pages/checkin/CheckIn';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/logusuario" component={LogUsuario}></Route>
        <Route path="/checkin" component={CheckIn}></Route>
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