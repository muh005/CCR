// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue 			from 'vue'
import iView 		from 'iview'
import 'iview/dist/styles/iview.css'
import App 			from './App'
import Home 		from './components/Home'
import Task			from './components/Task'
import Customer		from './components/Customer'
import V_Echarts 	from './directives/echarts'

import VueRouter 	from 'vue-router'
import VueResource 	from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home},
		{ path: '/task', component: Task},

		{ path: '*', redirect: '/home'}
	],
	mode: 'history' 
})

var bus = new Vue({});

/* eslint-disable no-new */
const app = new Vue({
	router,
	data: {
		bus: bus,

		barChartOption: {
            tooltip: {},
            xAxis: {
                data: ['A', 'B', 'C', 'D', 'E']
            },
            yAxis: {},
            series: [
                {
                    name: 'Num',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10]
                }
            ]
        },

        lineChartOption: {
            tooltip : {
                trigger: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Num',
                    type:'line',
                    areaStyle: {normal: {}},
                    data: [52, 54, 60, 61, 65, 62, 80, 85, 90, 99, 40, 30, 20, 10, 0]
                }
            ]
        },

        methods: {
        addLineChartData: function () {
            var _this = this;
            // creat a fresh object with properties from the original object
            var newLineChartOption = Object.assign({}, _this.lineChartOption);

            // modify properties of the new object
            newLineChartOption.xAxis[0].data.push(Math.round(_this.lineChartOption.xAxis[0].data[_this.lineChartOption.xAxis[0].data.length - 1] + 1));
            newLineChartOption.xAxis[0].data.shift();
            newLineChartOption.series[0].data.push(Math.round(Math.random() * 100));
            newLineChartOption.series[0].data.shift();
            
            // assign the new object to the old object, Vue will detect the change
            _this.lineChartOption = newLineChartOption;
        	}
    	},
	},
	mounted: function () {
        var _this = this;

        // simulate realtime data change
        setInterval(function () {
            _this.addLineChartData();
        }, 1000);
    },
	directives:{
		'echarts':V_Echarts
	},
	render: h => h(App)
}).$mount('#app')
