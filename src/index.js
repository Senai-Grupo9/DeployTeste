import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './index.css';
import {parseJwt, usuarioAutenticado } from './services/auth';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import LogUsuario from './pages/logusuario/LogUsuario';
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
        <Route exact path="/" component={Login}/>
        <PrivateRoute path="/home" component={Home}/>
        <PrivateRoute path="/logusuario" component={LogUsuario}/>
        <PrivateRoute path="/checkin" component={CheckIn}/>
        
        
        <Route path="/notfound" component={erro}/>
        <Redirect to ="/notfound"/>
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