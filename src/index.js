import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './index.css';
import {parseJwt, usuarioAutenticado } from './services/auth';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Logpessoa from './pages/log/Logpessoa';
import CheckIn from './pages/checkin/CheckIn';
import erro from './pages/404/404'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      usuarioAutenticado() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Login}/>
        <PrivateRoute path="/home" component={Home}/>
        <PrivateRoute path="/logusuario" component={LogUsuario}/>
        <PrivateRoute path="/checkin" component={CheckIn}/>
        
        
        <Route path="/notfound" component={erro}/>
        <Redirect to ="/notfound"/>
=======
        <Route exact path="/home" component={Home}></Route>
        <Route path="/erro" component={erro} />
        <Route path="/log" component={Logpessoa}></Route>
        <Route path="/checkin" component={CheckIn}></Route>
        <Route path="/" component={Login}></Route>
>>>>>>> b82f873a04cb4be22398ddab73cecdef521f6457
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