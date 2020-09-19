import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import StoreProfile from './StoreProfile/StoreProfile';

const SetRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/store-profile" component={StoreProfile}/>
      </Switch>
    );
  }

export default SetRoutes