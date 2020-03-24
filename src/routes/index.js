import Vue from 'vue';
import VueRouter from 'vue-router';
// import newsView from '../views/newsView';
// import jobsView from '../views/jobsView';
// import askView from '../views/askView';
// import userView from '../views/userView';
// import itemView from '../views/itemView';
// import createListView from '../views/createListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '/',
      redirect : '/news',
    },
    {
      path : '/news',
      name : 'news',
      component: () => import('../views/newsView'),
    },
    {
      path: '/jobs',
      name : 'jobs',
      component: () => import('../views/jobsView'),
    },
    {
      path: '/ask',
      name : 'ask',
      component: () => import('../views/askView'),
    },
    {
      path: '/user/:id',
      name : 'user',
      component: () => import('../views/userView'),
    },
    {
      path : '/item/:id',
      name : 'item',
      component: () => import('../views/itemView'),
    }
  ]
})

// 라우터 네비게이션
router.beforeEach((to, from, next) => {
  if (!to.params.id) {
    bus.$emit('start:spinner');
    store.dispatch('FETCH_LIST', to.name)
    .then(() => {
      bus.$emit('end:spinner');
      next();
    })
    .catch((error) => {
      console.log(error);
    });
  } else {
    next();
  }
})