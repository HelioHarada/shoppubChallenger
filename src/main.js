import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Jquery to use slick

import Slick from 'vue-slick';


// Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter)

// Vue Resource
import VueResource from 'vue-resource';
Vue.use(VueResource)

// babel
require("babel-core/register");
require("babel-polyfill");

// use router
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
