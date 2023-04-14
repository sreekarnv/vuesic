import store from '../store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/index.vue'),
		meta: {
			auth: false,
		},
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/dashboard.vue'),
		meta: {
			auth: true,
		},
	},
	{
		path: '/logout',
		name: 'Logout',
		component: () => import('../views/logout.vue'),
		meta: {
			auth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, _, next) => {
	if (to.meta.auth && !store.state.auth.user) {
		return next('/');
	} else {
		return next();
	}
});

export default router;
