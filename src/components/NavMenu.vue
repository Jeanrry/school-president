<template>
  <el-aside class="app-side" :class="isCollapseProp ? 'app-side-collapsed' : 'app-side-expanded'">
    <!--<div class="app-side-logo">-->
    <!--<img src="@/assets/logo.png" class="app-logo-img"/>-->
    <!--<div class="app-logo-name" v-show="!isCollapseProp"></div>-->
    <!--</div>-->
    <el-scrollbar style="height: 100%">
      <el-menu
          router
          :collapse="isCollapseProp"
          :unique-opened="true"
          :collapse-transition="true"
          :default-active="this.$route.path"
          @open="handleOpen"
          @close="handleClose"
          style="height: 100%; border-right: solid 1px #fff;">
        <template v-for="item in navdata">
          <!--判断一级菜单是否有子节点（没有的情况下）-->
          <el-menu-item
              v-if="!item.child"
              :key="item.url"
              :index="item.url"
              :route="item.url">
            <ugly-icon :icon="item.icon"></ugly-icon>
            <!--<span :class="item.icon" class="iconfont nav-ico"></span>-->
            <span slot="title">{{item.name}}</span>
          </el-menu-item>

          <!--判断一级菜单是否有子节点（有的情况下）-->
          <el-submenu
              v-if="item.child"
              :key="item.url"
              :index="item.url">
            <template slot="title">
              <ugly-icon :icon="item.icon"></ugly-icon>
              <!--<span :class="item.icon" class="iconfont nav-ico"></span>-->
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item v-for="term in item.child" :key="term.url" :index="term.url" :route="term.url">
              {{term.name}}
            </el-menu-item>
          </el-submenu>
        </template>
        <!--<el-menu-item-->
        <!--v-for="item in navdata"-->
        <!--:key="item.url"-->
        <!--:index="item.url">-->
        <!--<span :class="item.icon" class="iconfont nav-ico"></span>-->
        <!--<span slot="title">{{item.name}}</span>-->
        <!--</el-menu-item>-->
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
export default {
  name: 'navMenu',
  props: {
    'isCollapseProp': Boolean
  },
  data () {
    return {
      navdata: []
    }
  },
  created () {
    this.getNavBarData()
  },
  methods: {
    getNavBarData () {
      // let that = this
      // that.$http.post('/getNavMenuData').then(function (res) {
      //   console.log(res)
      //   let code = res.body.code
      //   if (code === 113) {
      //     this.navdata.push(res.body.data)
      //   }
      // })
      this.navdata = [
        {
          id: '0',
          name: '首页',
          url: '/home',
          icon: 'icon-zhuye'
        },
        {
          id: '1',
          name: '资金管理',
          url: '/fundsManagement',
          icon: 'icon-qianbao1'
        },
        {
          id: '2',
          name: '学校管理',
          url: '/schoolsManagement',
          icon: 'icon-dingwei',
          child: [
            {
              name: '学校列表',
              url: '/schoolsList'
            }
          ]
        },
        {
          id: '3',
          name: '教师管理',
          url: '/teachersManagement',
          icon: 'icon-duoren',
          child: [
            {
              name: '教师列表',
              url: '/teachersList'
            }
          ]
        },
        {
          id: '4',
          name: '学生列表',
          url: '/studentsList',
          icon: 'icon-bianji'
        },
        {
          id: '5',
          name: '技能图谱',
          url: '/knowledgeTipsTable',
          icon: 'icon-shuji'
        },
        {
          id: '6',
          name: '设置',
          url: '/settingManagement',
          icon: 'icon-shezhi',
          child: [
            {
              url: '/settingList',
              name: '设置'
            },
            {
              url: '/achievementList',
              name: '成就'
            }
          ]
        },
        {
          id: '7',
          name: '测试页面',
          url: '/test',
          icon: 'icon-zhifu'
        }
      ]
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .app-side-logo {
    text-align: center;
    overflow: hidden;
  }

  .app-logo-img {
    width: 23px;
    height: 23px;
    display: block;
    margin-top: 19px;
    margin-left: 15px;
    float: left;
  }

  .app-logo-name {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    float: left;
    margin-left: 5px;
  }

  .nav-ico {
    font-size: 20px;
  }

  /*左侧样式*/
  .app-side-collapsed {
    width: 60px !important;
    overflow-x: hidden;
    height: 100%;
  }

  .app-side-expanded {
    width: 220px !important;
    overflow-x: hidden;
    height: 100%;
  }

</style>
