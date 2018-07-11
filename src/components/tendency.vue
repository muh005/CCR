<template>
    <div class="line1">
        <div id="line1" class="" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/toolbox';
    import 'echarts/lib/component/markPoint';
    import 'echarts/lib/component/tooltip';
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('line1'));
            this.initData();
        },
        props: ['sevenDate', 'sevenDay'],
        methods: {
            initData(){
                const colors = ['#5793f3', '#675bba', '#d14a61'];
                const option = {
                    color: colors,
                    title: {
                        text: '',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['item1', 'item2', 'item3']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['bar', 'line']},
                            restore: {},
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: this.sevenDay
                    },
                    yAxis: [
                        {
                          type: 'value',
                          name: 'num',
                          min: 0,
                          max: 200,
                          position: 'left',
                          axisLine: {
                              lineStyle: {
                                  color: '#999'
                              }
                          },
                          axisLabel: {
                              formatter: '{value}'
                          }
                        },
                        {
                          type: 'value',
                          name: 'duration',
                          min: 0,
                          max: 200,
                          position: 'right',
                          axisLine: {
                              lineStyle: {
                                  color: '#999'
                              }
                          },
                          axisLabel: {
                              formatter: '{value}'
                          }
                        },
                    ],
                    series: [
                        {
                            name:'item1',
                            type:'line',
                            data:this.sevenDate[0],
                            yAxisIndex: 1,
                            markPoint: {
                                data: [
                                    {type: 'max', name: 'maximum'},
                                    {type: 'min', name: 'minimum'}
                                ]
                            },
                        },
                        {
                            name:'item2',
                            type:'line',
                            data:this.sevenDate[1],
                            yAxisIndex: 1,
                            markPoint: {
                                data: [
                                    {type: 'max', name: 'maximum'},
                                    {type: 'min', name: 'minimum'}
                                ]
                            },
                        },
                        {
                            name:'item3',
                            type:'line',
                            data:this.sevenDate[2],
                            yAxisIndex: 1,
                            markPoint: {
                                data: [
                                    {type: 'max', name: 'maximum'},
                                    {type: 'min', name: 'minimum'}
                                ]
                            },
                        }
                    ]
              };
                this.myChart.setOption(option);
            }
        },
        watch: {
            sevenDate: function (){
                this.initData()
            },
            sevenDay: function (){
                this.initData()
            }
        }
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .line1{
        display: flex;
        justify-content: center;
    }
</style>
