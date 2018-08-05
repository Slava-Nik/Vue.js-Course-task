import Vue from 'vue';


import VueRouter from 'vue-router';
import {routes} from './routes.js';
import {store} from './store/store.js';
import App from './App.vue';


Vue.use(VueRouter);

Vue.filter('currency', (value) => {
	return "$" + value.toLocaleString('en-IN');
});

const router = new VueRouter({
	routes,
  mode: "history" 
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})




