import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import List from '@/components/List'
import Write from '@/components/Write'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      props: true
    },
    {
      path: '/write',
      name: 'Write',
      component: Write,
    },
    {
      path: '/detail/:no',
      name: 'No',
      component: Detail,
      props: true
    },
  ]
})
