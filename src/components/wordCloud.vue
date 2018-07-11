<template>
	<div class="wordcloud">
		<div id="wordcloud" class="" style="width: 90%;height:450px;"></div>
	</div>
</template>

<script>
	import echarts from 'echarts/lib/echarts';
	import 'echarts/lib/chart/wordcloud'
	import 'echarts/lib/component/title'
	import 'echarts/lib/component/legend'

	export default{
		mounted(){
			this.myChart = echarts.init(document.getElementById('wordcloud'))
			this.initData();
		},
		props:[],
		methods:{
			initData(){
				const option = {
					title : {
						text: '关键字',
						subtext: '',
					},

					tootip: {},
					series: [{
			            type : 'wordCloud', 
			            shape:'smooth',  
			            gridSize : 0, 
			            size : ['80%','80%'],
			            sizeRange : [ 30, 50 ],  
			            rotationRange : [ 0, 45 ],
			            textStyle : {  
			            normal : {
			                fontFamily:'sans-serif',
			                color : function() {  
			                return 'rgb('  
			                 	+ [ Math.round(Math.random() * 160),  
			                        Math.round(Math.random() * 160),  
			                        Math.round(Math.random() * 160) ]  
			                        .join(',') + ')';  
			                }  
			            },  
			            emphasis : {  
			                shadowBlur : 5, 
			                shadowColor : '#333',
			            }  
			         	},
			            data:[{"name": "期限","value": "20"},
		                    {"name": "管理人","value": "12"},
		                    {"name": "安全性","value": "15"},
		                    {"name": "开放期","value": "20"},
		                    {"name": "起投点","value": "14"},
		                    {"name": "管理费","value": "16"},
		                    {"name": "标的","value": "9"},
		                    {"name": "流动性","value": "11"},
		                    {"name": "收益","value": "17"}]
		        			}] 
				};

				this.myChart.setOption(option);
			}
		},
		watch : {
			wordData: function (){
				this.initData()
			}
		}
	}
</script>

<style lang="less">	
	@import '../style/mixin';
	.wordcloud{
		display:flex;
		justify-center:center;
		margin-top:20px;
	}
</style>

