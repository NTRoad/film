import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/home/Home';
import About from './routes/about/About';
import User from './routes/user/User';
import Login from './routes/user/Login';
import Collection from './routes/collection/Collection';
import Details from './routes/details/Details';
import All from './routes/all/All';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/user" exact component={User} />
        <Route path="/login" exact component={Login} />
        <Route path="/collection" exact component={Collection} />
        <Route path="/details" exact component={Details} />
        <Route path="/all" exact component={All} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
