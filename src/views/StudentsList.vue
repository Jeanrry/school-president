<template>
  <div class="students-list" v-wechat-title="this.title">
    <!--<h1>学生列表</h1>-->
    <data-table :table-message="studentTable"></data-table>
  </div>
</template>

<script>
import DataTable from '../components/DataTable'
export default {
  name: 'Students',
  components: {
    DataTable
  },
  data () {
    return {
      title: '学生列表',
      studentTable: {
        deviceType: 'smartMattress',
        showUrl: '/rest/device/shows',
        addUrl: '/rest/device/add',
        editUrl: '/rest/device/edit',
        delUrl: '/rest/device/del',
        searchUrl: '',
        setActiveUrl: '/rest/device/active',
        operateButton: [
          {
            label: '删除',
            confirm: true,
            url: '/rest/device/del'
          },
          {
            label: '禁用',
            confirm: false,
            url: '/rest/device/active'
          },
          {
            label: '编辑',
            confirm: false,
            url: '/rest/device/active'
          }
        ],
        columns: [
          {
            prop: 'hardId',
            label: '硬件ID',
            width: '180',
            fixed: 'left'
          },
          {
            prop: 'hardName',
            label: '硬件编号',
            width: '180',
            fixed: ''
          },
          {
            prop: 'deviceType',
            label: '设备类型',
            width: '180',
            fixed: ''
          },
          {
            prop: 'deviceModel',
            label: '设备型号',
            width: '180',
            fixed: ''
          },
          // {
          //   prop: 'binderName',
          //   label: '绑定人',
          //   width: '180',
          //   fixed: ''
          // },
          // {
          //   prop: 'bedName',
          //   label: '床位名称',
          //   width: '180',
          //   fixed: ''
          // },
          // {
          //   prop: 'bedCode',
          //   label: '床位编号',
          //   width: '180',
          //   fixed: ''
          // },
          // {
          //   prop: 'managerName',
          //   label: '管理人',
          //   width: '180',
          //   fixed: ''
          // },
          {
            prop: 'createrName',
            label: '创建人',
            width: '180',
            fixed: ''
          },
          // {
          //   prop: 'status',
          //   label: '状态',
          //   width: '180',
          //   fixed: ''
          // },
          {
            prop: 'remarks',
            label: '备注',
            width: '180',
            fixed: 'right'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.students-list {

}
</style>
