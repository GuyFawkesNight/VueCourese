import Home from '@/views/Home.vue'
import {setTitle} from '@/lib/util'

export default [
  {
    // 路径
    path: '/',
    //路由名
    name:'main',
    //别名
    alias :'/home_page',
    // 路由对应的组件
    component: Home,

    props:route=>({
      food:route.query.food
    }),
    beforeEnter:(to,from,next)=>{
      if(from.name=='about') alert("这是从About页来的");
      else alert("这不是从About页来的");
      next();
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // 懒加载，只有在访问时才会加载组件
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    //指定参数传入
    props:{
      food:'banana'
    },
    meta:{
      title:"关于"
    }
  },
  // 动态路由配置,参数传递
  {
    path: '/argu/:name',
    name:'argu',
    component: () => import('@/views/Argu.vue'),
    //使用router.params作为组件的属性值传入
    props:true
  },
  //嵌套路由
  {
    path:'/parent',
    name:'parent',
    component:()=>import('@/views/Parent.vue'),
    children:[
      {
      path:'child',
      component:()=>import('@/views/Child.vue')
      }
    ]
  },
  //使用命名组件，多组件加载
  {
    path:'/multi_part',
    components:{
      default:()=>import('@/views/Child.vue'),
      email:()=>import('@/views/Email.vue'),
      tel:()=>import('@/views/Tel.vue')
    }
  },

  //重定向路由
  {
    path:'/direct_to',
    // 使用函数的方式自定义重定向逻辑
    redirect: (route)=>{
      //route 代表了当前的路由对象 下面这个是路由名
      return{ name:'main'};

      //下面这个时路径
      // return '/';
    }
  },
  {
    path:'*',
    component:()=>import("@/views/error_404.vue")
  }
]
