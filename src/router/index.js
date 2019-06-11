import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'

Vue.use(Router)

const router = new Router({
  routes,
});

const HAS_LOGIN = true;
//全局前置守卫
router.beforeEach((to,from,next)=>{

  //获取路由元数据
  to.meta && setTitle(to.meta.title);

  //未登录则跳转到登陆
  if(to.name!= 'login'){
    if(HAS_LOGIN) next();
    else next({name:'login'});
  }
  //登陆则跳转到主页
  else{
    if(HAS_LOGIN) next({name:'main'})
    else next();
  }
})

//全局后置钩子
router.afterEach((to,from)=>{
  //可以用来结束等待状态，隐藏加载符等操作
})

//组件内守卫及异步路由被解析之后 到  导航被确认之前（所有导航钩子都结束）
router.beforeResolve()



export default router;