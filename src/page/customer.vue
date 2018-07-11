<template>
	<div class="fillcontain">
		<head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  label="序号"
                  type="index"
                  width="120">
                </el-table-column>
                <el-table-column
                  property="userID"
                  label="客户编号"
                  width="130">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="客户名称"
                  width="130">
                </el-table-column>
                <el-table-column
                  property="contact"
                  label="联系方式"
                  width="130">
                </el-table-column>
                <el-table-column
                  property="store"
                  label="人库ID"
                  width="130">
                </el-table-column>
                <el-table-column
                  property="time"
                  label="指定时间"
                  width="130">
                </el-table-column>
                <el-table-column
                  property="state"
                  label="通话状态"
                  width="130">
                </el-table-column>
                <el-table-column
                  property="operation"
                  label="操作"
                  width="130">
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
        </div>
	</div>
</template>

<script>
	import headTop from '../components/headTop'
	export default{
		data(){
			return{
				tableData: [{
                  userID: 'A0001',
                  username: '吴宣仪',
                  contact: '13666666666',
                  store: '123456',
                  time: '15:00-17:00',
                  state:"进行中",
                  operation:"",
                }, {
                  userID: 'A0002',
                  username: '张紫宁',
                  contact: '13666668888',
                  store: '123456',
                  time: '15:00-17:00',
                  state:"调度中",
                  operation:"",
                }, {
                  userID: 'A0003',
                  username: '杨超越',
                  contact: '13666669999',
                  store: '123456',
                  time: '15:00-17:00',
                  state:"待拨打",
                  operation:"",
                }],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
			}
		},
		components:{
			headTop,
		},
		created(){
			this.initData();
		},
		methods(){
		},
	}
</script>

<style lang="less">
	@import '../style/mixin';
	.table_container{
		padding: 20px;
	}
</style>
