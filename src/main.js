// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueFire from 'vuefire';
import VueRouter from 'vue-router';

import App from './App'
import Hello from './components/Hello.vue';
import Conversations from './components/Conversations.vue';

/*
 * Because we installed VueFire via npm and imported it as a module, we have
 * to add this little snippet of code to 'install' it. If you include the lib
 * via typical <script> tags in your HTML document, this isn't required.
 */

Vue.use(VueFire)
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Hello },
  { path: '/conversations', component: Conversations }
]
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
