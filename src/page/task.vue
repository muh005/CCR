<template>
    <div class="fillcontain">
        <head-top></head-top>
        <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
        <dialogue-pie :pieData="pieData"></dialogue-pie>
        <word-cloud></word-cloud>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import tendency from '../components/tendency'
    import dialoguePie from '../components/dialoguePie'
    import wordCloud from '../components/wordCloud'
    import dtime from 'time-formater'
    export default {
        data(){
            return {
                item1:null,
                item2:null,
                item3:null,
                additem1: null,
                additem2: null,
                additem3: null,
                sevenDay:[],
                sevenDate:[[],[],[]],


                pieData:{accept: 2209, no: 1220, reject: 1402, off: 768, other: 5873},

                wordData:[]
            }
        },
    	components: {
    		headTop,
            tendency,
            dialoguePie,
            wordCloud,
    	},
        created(){
            this.initData();
            for (let i = 6; i > -1; i--) {
              const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
              this.sevenDay.push(date)
            }
            this.getSevenData();
        },
        methods: {
            async initData(){
              const today = dtime().format('YYYY-MM-DD')
                this.item1 = 70;
                this.item2 = 80;
                this.item3 = 20;
                this.additem1 = 5;
                this.additem2 = 0;
                this.additem3 = 60;
            },
            async getSevenData(){
              this.sevenDate = [[70, 40, 70, 40, 70, 40, 70], 
                                [80, 200 , 0, 80, 200, 0, 80],
                                [60, 60, 60, 60, 60, 60, 60]];
              console.log(resArr)
            }   
        }
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>
