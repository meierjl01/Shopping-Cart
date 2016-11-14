import ReactDom from 'react-dom';
import React from 'react';
import router from './router';
import StoreItems from './store';

const container = document.getElementById('container');


ReactDom.render(router, container);
