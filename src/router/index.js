import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const task = r => require.ensure([], () => r(require('@/page/task')), 'task');
const customer = r => require.ensure([], () => r(require('@/page/customer')), 'customer');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/task',
			component: task,
			meta: ['任务管理', '销售意向'],
		},{
			path: '/customer',
			component: customer,
			meta: ['任务管理', '断点场景'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
