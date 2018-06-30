require('bootstrap-loader');
require('./js/tips.js');

import router from './js/router.js';

const MAP = [{
      path:'#/login',
      templateUrl:'/src/pages/login.html'	
},{
      path:'#/home',
      templateUrl:'/src/pages/home.html'	
},{
      path:'',
      templateUrl:'/src/pages/login.html'
}];

window.router = new router({routeMap:MAP});

require('./js/common.js');

