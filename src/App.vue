<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <h1>CCR</h1>
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1', '2']"> 
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"/>任务管理
                    </template>
                    <MenuItem name="1-1">销售意向</MenuItem>
                    <MenuItem name="1-2">断点场景</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"/>客户管理
                    </template>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header>
                <div class="search">
                    搜索任务名称
                </div>
                <div class="user">
                    颜汐
                </div>
                <div class="notification">
                        
                </div>
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">  
                <div class="panel panel-info">
                 <div class="panel-heading">
                  <h3 class="panel-title">Line Chart (Real Time)</h3>
                 </div>
                 <div class="panel-body">
                  <div class="chart" v-echarts="lineChartOption"></div>
                 </div>
                </div>
                </Breadcrumb>
                <Card dis-hover style="height: 600px">
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
    };
</script>
<style scoped lang="scss">
    h1{
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        color: #000000;
        background: #FFFFFFFF;
        text-align:center;
    }
    .main {
        background: #FFFFFFFF;
        overflow: hidden;
    }

    .layout {
        background: #FFEBF2FC;
        position: 0 60px;
        overflow: hidden;
    }
    .ivu-layout-header {
        padding: 0 16px;
        background: #fff;
        box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .02);
        .search {
            float: left;
            font-family: PingFangSC-Regular;
            color: #7A8FA5;
            font-weight: bold;
            font-size: 14px;
        }
        .user {
            float: right;
            font-family: PingFangSC-Regular;
            color: #7A8FA5;
            font-weight: bold;
            font-size: 14px;
        }
    }
    .chart{
        width: 100px;
        height:400px;
    }
</style>

</style>