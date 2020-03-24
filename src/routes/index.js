import Vue from 'vue';
import VueRouter from 'vue-router';
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
      meta : {
        dataview : true
      }
    },
    {
      path: '/jobs',
      name : 'jobs',
      component: () => import('../views/jobsView'),
      meta: {
        dataview: true
      }
    },
    {
      path: '/ask',
      name : 'ask',
      component: () => import('../views/askView'),
      meta: {
        dataview: true
      }
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
  if (to.meta.dataview) {
    bus.$emit('start:spinner');
    store.dispatch('FETCH_LIST', to.name)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.log(error);
    });
  } else if (to.name == 'item'){
    bus.$emit('start:spinner');
    store.dispatch('FETCH_ITEM',to.params.id)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.log(error);
    })
  } else if(to.name == 'user'){
    bus.$emit('start:spinner');
    store.dispatch('FETCH_USER',to.params.id)
    .then(() => {
      next();
    })
  }
})