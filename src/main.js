// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Input,Menu,Col,Submenu,MenuItem,Form,FormItem,Container,Aside} from 'element-ui'

Vue.config.productionTip = false


Vue.component(Button.name,Button)
Vue.component(Input.name,Input)
Vue.component(Menu.name,Menu)
Vue.component(Col.name,Col)
Vue.component(Submenu.name,Submenu)
Vue.component(MenuItem.name,MenuItem)
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Container.name,Container)
Vue.component(Aside.name,Aside)







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
