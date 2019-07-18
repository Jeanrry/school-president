import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const VueRouter = new Router({
  mode: 'history',
  routes: [
    { // 主页
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/Home'], resolve)
    },
    {
      path: '/',
      redirect: {
        path: '/home'
      }
    },
    { // 预制页面
      path: '/about',
      name: 'about',
      component: resolve => require(['@/views/About'], resolve)
    },
    {
      path: '/fundsManagement',
      name: 'fundsManagement',
      component: resolve => require(['@/views/FundsManagement'], resolve)
    },
    {
      path: '/schoolsList',
      name: 'schoolsList',
      component: resolve => require(['@/views/SchoolsList'], resolve)
    },
    {
      path: '/teachersList',
      name: 'teachersList',
      component: resolve => require(['@/views/TeachersList'], resolve)
    },
    {
      path: '/studentsList',
      name: 'studentsList',
      component: resolve => require(['@/views/StudentsList'], resolve)
    },
    {
      path: '/skillTree',
      name: 'skillTree',
      component: resolve => require(['@/views/SkillTree'], resolve)
    },
    {
      path: '/settingList',
      name: 'setting',
      component: resolve => require(['@/views/Setting'], resolve)
    },
    {
      path: '/achievementList',
      name: 'achievement',
      component: resolve => require(['@/views/AchievementList'], resolve)
    },
    {
      path: '/encyclopedia',
      name: 'encyclopedia',
      component: resolve => require(['@/views/Encyclopedia'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/views/Test'], resolve)
    },
    {
      path: '/404',
      name: 'NotFoundLink',
      component: resolve => require(['@/views/NotFound'], resolve)
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
})

export default VueRouter
