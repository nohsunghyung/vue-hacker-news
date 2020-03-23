import Vue from 'vue';
import VueRouter from 'vue-router';
import newsView from '../views/newsView';
import jobsView from '../views/jobsView';
import askView from '../views/askView';
import userView from '../views/userView';
import itemView from '../views/itemView';
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
			component: newsView,
			beforeEnter : (to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
				.then(() => {
					bus.$emit('end:spinner');
					next();
				})
				.catch((error) => {
					console.log(error);
				});
			}
        },
        {
			path: '/jobs',
			name : 'jobs',
			component: jobsView,
			beforeEnter : (to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
				.then(() => {
					next();
				})
				.catch( error => {
					console.log(error);
				});
			}
        },
        {
			path: '/ask',
			name : 'ask',
			component: askView,
			beforeEnter : (to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
				.then(() => {
					bus.$emit('end:spinner');
					next();
				})
				.catch(error => {
					console.log(error);
				})
			}
        },
        {
			path: '/user/:id',
			name : 'user',
            component : userView,
        },
        {
			path : '/item/:id',
			name : 'item',
            component : itemView,
        }
    ]
})