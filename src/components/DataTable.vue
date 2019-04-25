<template>
  <div class="data-table">
    <!--功能区域 start-->
    <div ref="topFun" class="table-head hidden-xs-only">
      <!--搜索重置 start-->
      <!--<div class="file-left">-->
      <!--<el-input-->
      <!--v-model="searchInput"-->
      <!--placeholder="请输入设备编号"-->
      <!--@keyup.enter="searchButtonOnClick"-->
      <!--class="tab-search-input">-->
      <!--</el-input>-->
      <!--<el-button-->
      <!--type="primary"-->
      <!--icon="el-icon-search"-->
      <!--@click="searchButtonOnClick">-->
      <!--查询-->
      <!--</el-button>-->
      <!--<el-button-->
      <!--icon="el-icon-news"-->
      <!--@click="resetButtonOnClick">-->
      <!--重置-->
      <!--</el-button>-->
      <!--</div>-->
      <!--搜索重置 end-->

      <!--新增、删除、刷新、导入、导出 start-->
      <div class="float-right">
        <el-button-group>
          <el-button
              type="primary"
              icon="el-icon-edit-outline"
              @click="handleAdd">
            新增
          </el-button>
          <el-button
              type="primary"
              icon="el-icon-delete"
              @click="deleteButtonOnClick">
            删除
          </el-button>
          <el-button
              type="primary"
              icon="el-icon-refresh"
              @click="refreshButtonOnClick">
            刷新
          </el-button>
          <!--<el-button-->
              <!--type="primary"-->
              <!--icon="el-icon-upload2"-->
              <!--@click="uploadButtonOnClick">-->
            <!--导入-->
          <!--</el-button>-->
          <!--<el-button-->
              <!--type="primary"-->
              <!--icon="el-icon-download"-->
              <!--@click="downloadButtonOnClick">-->
            <!--导出-->
          <!--</el-button>-->
        </el-button-group>
      </div>
      <!--新增、删除、刷新、导入、导出 end-->
    </div>
    <!--功能区域 end-->

    <!--elementUI 表格框架 start-->
    <div style="padding: 0 15px">
      <el-table
          ref="multipleTable"
          max-height="500"
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          :data="tableData"
          stripe
          tooltip-effect="dark"
          style="width: 100%; padding: 0 15px"
          @selection-change="handleSelectionChange"
          :row-key="getRowKeys">
        <el-table-column
            :reserve-selection="true"
            align="center"
            fixed="left"
            type="selection"
            :selectable="checkSelectable"
            width="55">
        </el-table-column>

        <!-- 动态渲染列表列 -->
        <template
            v-for="col in cols">
          <el-table-column
              v-if="col.fixed === 'left'"
              :key="col.label"
              :prop="col.prop"
              :label="col.label"
              :min-width="col.width"
              fixed="left">
          </el-table-column>
          <el-table-column
              v-if="col.fixed === ''"
              :key="col.label"
              :prop="col.prop"
              :label="col.label"
              :min-width="col.width">
          </el-table-column>
          <el-table-column
              v-if="col.fixed === 'right'"
              :key="col.label"
              :prop="col.prop"
              :label="col.label"
              :min-width="col.width"
              fixed="right">
          </el-table-column>
        </template>
        <el-table-column
            fixed="right"
            label="操作"
            width="200">
          <template slot-scope="scope">
            <el-button
                type="text"
                size="small"
                @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <el-button
                type="text"
                size="small"
                @click="activeButtonOfTableOnClick(scope.row)"
                v-html="scope.row.status == '0'? '禁用': '启用'">
            </el-button>
            <el-button
                type="text"
                size="small"
                :disabled="scope.row.isBind == 0 ? false : true"
                @click="handleDelete(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--elementUI 表格框架 end-->

    <div ref="footFun" class="table-ctrl-bar hidden-xs-only">
      <!--反向选择、取消选择、已选条数 start-->
      <div class="float-left">
        <el-button-group>
          <el-button @click="inverseSelectionButtonOfTableOnClick(tableData)">反向选择</el-button>
          <el-button @click="clearSelectionButtonOfTableOnClick()">取消选择</el-button>
        </el-button-group>
        <span class="selected">已选 {{ multipleSelection.length }} 条</span>
      </div>
      <!--反向选择、取消选择、已选条数 end-->

      <!--翻页 start-->
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalItems"
          class="float-right">
      </el-pagination>
      <!--翻页 end-->
    </div>

    <!-- 确认删除弹窗 start-->
    <el-dialog title="提示" :visible.sync="deleteDialogVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 确认删除弹窗 end-->
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    tableMessage: Object
  },
  data () {
    return {
      // 绑定搜索输入框
      searchInput: '',
      // 当前页码
      currentPage: 1,
      // 页面容量
      pageSize: 10,
      // 总数据量
      totalItems: 0,
      // 加载状态
      loading: true,
      // 表格数据
      tableData: [],
      // 多选数据
      multipleSelection: [],
      // 存放删除的数据
      delarr: [],
      // 删除弹出框显示状况
      deleteDialogVisible: false,
      key: ''
    }
  },
  mounted: function () {
    // 计算table自适应高度
    this.tableHeight = window.innerHeight - 230
    const that = this
    window.onresize = () => {
      return (() => {
        window.tableHeight = window.innerHeight
        that.tableHeight = window.tableHeight - 230
      })()
    }
  },
  // 生命周期钩子 created
  created: function () {
    /*
        * 把父组件的值传递到子组件
        * cols 表格表头的数据
        * showUrl 查询移动呼叫设备列表接口路径
        * addUrl 添加移动呼叫设备接口路径
        * editUrl 编辑移动呼叫设备接口路径
        * delUrl 删除移动呼叫设备接口路径
        * delAllUrl 批量删除移动呼叫设备接口路径
        * countUrl 查询移动呼叫设备记录数接口路径
        * showUrl 查询移动呼叫设备列表接口路径
        * doDisableStatusUrl 启用/禁用接口路径
        */
    this.cols = this.tableMessage.columns
    this.showUrl = this.tableMessage.showUrl
    // this.addUrl = this.tableMessage.addUrl;
    // this.editUrl = this.tableMessage.editUrl;
    this.delUrl = this.tableMessage.delUrl
    this.delAllUrl = this.tableMessage.delAllUrl
    this.doDisableStatusUrl = this.tableMessage.doDisableStatusUrl

    // 在页面加载前调用表格初始化方法
    this.getDataList()

    this.loading = false
  },
  methods: {
    // 重置翻页 重新加载数据
    refreshDatas: function (pageNum) {
      this.getCount()
      var allPages = Math.ceil(this.totalItems / this.pagesize)
      if (pageNum) {
        this.currentPage = pageNum
      } else if (allPages < this.currentPage) {
        this.currentPage = allPages
      }

      // 重新加载列表
      this.getDataList()
    },
    // 加载数据
    getDataList: function () {
      // 定义向后台传递的值
      let postData = {
        authToken: sessionStorage.getItem('authToken'),
        offset: ((this.currentPage - 1) * this.pageSize),
        limit: this.pageSize,
        searchKey: this.searchInput

      }
      // 向后台发送列表的请求
      // this.$http.post(this.prodBaseApi + this.showUrl, postData, { emulateJSON: true }).then(function (res) {
      //   var code = res.body.code
      //   if (code === 113) {
      //     this.tableData = res.body.data
      //     this.loading = false
      //   } else if (code === 114) {
      //     this.$message({
      //       showClose: true,
      //       message: '无结果'
      //     })
      //   } else if (code === 112) {
      //     this.$message({
      //       showClose: true,
      //       message: '查询异常！',
      //       type: 'error'
      //     })
      //   }
      // }, function () {
      //   this.$message({
      //     showClose: true,
      //     message: '服务器异常！',
      //     type: 'error'
      //   })
      // })
    },
    // 搜索按钮响应事件
    searchButtonOnClick: function () {
      this.loading = true
      // this.getCount();
      this.refreshDatas(1)
    },
    // 搜索框重置
    resetButtonOnClick: function () {
      this.searchInput = ''
      this.refreshDatas(1)
    },
    // 新增按钮响应事件
    handleAdd: function () {
      // 路由跳转到新增页面
      this.$router.push({
        path: '/device/' + this.tableMessage.deviceType + '/add'
      })
    },
    // 删除按钮响应事件
    deleteButtonOnClick: function () {
      const length = this.multipleSelection.length
      if (length <= 0) {
        this.$alert('请至少选择一项', '', {
          confirmButtonText: '确定',
          type: 'warning',
          callback: action => {
          }
        })
      } else {
        this.deleteDialogVisible = true
        this.delarr = []
        for (let i = 0; i < length; i++) {
          this.delarr.push({ id: this.multipleSelection[i].id })
        }
      }
    },
    // 刷新按钮响应事件
    refreshButtonOnClick: function () {
      // this.searchInput = '';
      this.refreshDatas(1)
    },
    // 编辑按钮响应事件
    handleEdit: function (row) {
      this.$router.push({
        path: '/device/' + this.tableMessage.deviceType + '/edit',
        query: row
      })
    },
    // 表内禁用按钮响应事件
    activeButtonOfTableOnClick: function (row) {
      // 定义向后台传递的值
      let postData = {
        authToken: sessionStorage.getItem('authToken'),
        id: row.id,
        status: row.status === '1' ? '0' : '1'
      }
      // 向后台发送启用/禁用的请求
      this.$http.post(this.prodBaseApi + this.doDisableStatusUrl, postData, { emulateJSON: true }).then(function (res) {
        var code = res.body.code
        if (code === 104) {
          if (postData.status === 0) {
            this.$message.success('启用成功')
            this.refreshDatas()
          } else {
            this.$message.success('禁用成功')
            this.refreshDatas()
          }
        } else if (code === 105) {
          this.$alert('提交失败', '提交结果', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: action => {
            }
          })
        } else if (code === -1) {
          this.$alert('异常', '提交结果', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: action => {
            }
          })
        }
      }).catch(error => {
        this.$message.error(error)
      })
    },
    // 单行删除
    handleDelete: function (row) {
      this.msg = row
      // 把单行删除的每条数据的id添加进放删除数据的数组
      this.delarr.push(this.msg.id)
      // 显示删除弹框
      this.deleteDialogVisible = true
    },
    // 批量删除
    delAll: function () {
      // 显示删除弹框
      this.deleteDialogVisible = true
      const length = this.multipleSelection.length
      for (let i = 0; i < length; i++) {
        this.delarr.push(this.multipleSelection[i].id)
      }
    },
    // 弹窗确定删除
    deleteRow: function () {
      let del_url = ''
      let delData = []
      if (this.delarr.length > 1) {
        del_url = this.delAllUrl
        for (var i = 0; i < this.delarr.length; i++) {
          delData.push(this.delarr[i].id)
        }
      } else {
        del_url = this.delUrl
        delData = this.delarr[0]
      }

      let postData = {
        authToken: sessionStorage.getItem('authToken'),
        id: delData
      }

      this.$http.post(this.prodBaseApi + del_url, postData, { emulateJSON: true }).then(function (res) {
        let code = res.body.code
        if (code === 108) {
          this.$message.success('删除成功')
          this.delarr = []
          this.refreshDatas()
        } else if (code === 109) {
          this.$message.error('删除失败！')
        }
      })
      // 关闭删除提示模态框
      this.deleteDialogVisible = false
    },
    // 表内反选按钮响应事件
    inverseSelectionButtonOfTableOnClick: function (rows) {
      rows.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row)
      })
    },
    // 表内清除选择按钮响应事件
    clearSelectionButtonOfTableOnClick: function () {
      this.$refs.multipleTable.clearSelection()
    },
    // 复选框改变触发
    handleSelectionChange: function (val) {
      // 勾选放在multipleSelection数组中
      this.multipleSelection = val
    },
    getRowKeys: function (row) {
      // 因为数据库中有id这个字段，所以前台row里面有id作为唯一标识
      return row.id
    },
    // 每页下拉显示数据几条数据
    handleSizeChange: function (size) {
      this.pageSize = size
      this.refreshDatas(1)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      this.getDataList()
    },
    // 复选框不能选
    checkSelectable: function (row) {
      return (row.isBind === 0)
    }
  }
}
</script>

<style scoped>
  .selected {
    font-size: 13px;
    margin-left: 10px;
  }

  /*table关联样式*/
  .table-head {
    overflow: hidden;
    padding: 15px;
    background-color: #fff;
    border-bottom: solid 3px #D2C9D8;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  /*翻页*/
  .table-ctrl-bar {
    overflow: hidden;
    margin-top: 15px;
    padding: 0 15px;
  }
</style>
