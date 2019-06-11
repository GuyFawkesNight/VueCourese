import Home from '@/views/Home.vue';

export default
  [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      //懒加载
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]

