import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import Cart from './components/cart';
import StoreItems from './components/storeitems';

const router = (
  <Router history={hashHistory}>
    <Route path ="/" component={StoreItems} />
  </Router>
);

export default router;
