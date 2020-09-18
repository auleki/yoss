import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import StoreProfile from './StoreProfile';

const SetRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/store-profile" component={StoreProfile}/>
      </Switch>
    );
  }

export default SetRoutes