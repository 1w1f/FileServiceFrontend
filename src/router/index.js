import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import File from '@/components/File'
import Setting from '@/components/Setting'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/MainPage',
      name: MainPage,
      component: MainPage,
      redirect:{name:'Setting'},
      children: [
        { path: 'File', name: 'File', component: File },
        { path: 'Setting', name: 'Setting', component: Setting }]
    }
  ]
})
