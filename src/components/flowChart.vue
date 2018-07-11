<template>
	<div class="flowchart">
		<div id="flowchart" class="", style="width: 90%;height:450px;"></div>
	</div>
</template>

<script>
	import echarts from 'echarts/lib/echarts';
	import 'echarts/lib/component/title';
	import 'echarts/lib/component/legend';
	import 'echarts/lib/chart/line';
	import 'echarts/lib/chart/bar';
	
	export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('flowchart'));
            this.initData();
        },
		
		methods: {
			initData(){
				const option = {
						
						title : {
							text: '流积图',
						},
						tooltip : {
					        trigger: 'axis',
					    },
					    legend: {
					        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
					    },
					    toolbox: {
					        show : true,
					        feature : {
					            mark : {show: true},
					            dataView : {show: true, readOnly: false},
					            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					            restore : {show: true},
					            saveAsImage : {show: true}
					        }
					    },
					    calculable : true,
					    xAxis : [
					        {
					            type : 'category',
					            boundaryGap : false,
					            data : ['周一','周二','周三','周四','周五','周六','周日']
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value'
					        }
					    ],
					    series : [
					        {
					            name:'邮件营销',
					            type:'line',
					            stack: '总量',
					            itemStyle: {normal: {areaStyle: {type: 'default'}}},
					            data:[120, 132, 101, 134, 90, 230, 210]
					        },
					        {
					            name:'联盟广告',
					            type:'line',
					            stack: '总量',
					            itemStyle: {normal: {areaStyle: {type: 'default'}}},
					            data:[220, 182, 191, 234, 290, 330, 310]
					        },
					        {
					            name:'视频广告',
					            type:'line',
					            stack: '总量',
					            itemStyle: {normal: {areaStyle: {type: 'default'}}},
					            data:[150, 232, 201, 154, 190, 330, 410]
					        },
					        {
					            name:'直接访问',
					            type:'line',
					            stack: '总量',
					            itemStyle: {normal: {areaStyle: {type: 'default'}}},
					            data:[320, 332, 301, 334, 390, 330, 320]
					        },
					        {
					            name:'搜索引擎',
					            type:'line',
					            stack: '总量',
					            itemStyle: {normal: {areaStyle: {type: 'default'}}},
					            data:[820, 932, 901, 934, 1290, 1330, 1320]
					        }
					    ]
				};
				
				this.myChart.setOption(option);
				
			}
		},
		watch: {
			flowchart:function (){
				this.initData()
			}
		}
	}
</script>

<style lang="less">
	@import '../style/mixin';
	.flowchart{
		display:flex;
		justify-center:center;
		margin-top:20px;
	}
</style>