import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound'

import FundsManagement from '@/views/FundsManagement'
import SchoolsList from '@/views/SchoolsList'
import TeachersList from '@/views/TeachersList'
import StudentsList from '@/views/StudentsList'
import Setting from '@/views/Setting'


Vue.use(Router)

const VueRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: {
        path: '/home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/fundsManagement',
      name: 'fundsManagement',
      component: FundsManagement
    },
    {
      path: '/schoolsList',
      name: 'schoolsList',
      component: SchoolsList
    },
    {
      path: '/teachersList',
      name: 'teachersList',
      component: TeachersList
    },
    {
      path: '/studentsList',
      name: 'studentsList',
      component: StudentsList
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/404',
      component: NotFound,
      name: 'NotFoundLink',
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
