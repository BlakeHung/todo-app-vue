import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../views/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
});
