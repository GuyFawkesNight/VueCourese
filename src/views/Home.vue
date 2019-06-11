<template>
  <div class="home">
    <b>{{food}}</b>
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">前一页</button>
    <button @click="handleClick('push')">后一页</button>
    <button @click="handleClick('replace')">replace</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props:{
    food:{
      type:String,
      default:"default something"
    }
  },

  //路由触发，页面渲染之前
  beforeRouteEnter (to, from, next) {
    // 无法直接使用this,可以在next中使用
    next(vm =>{console.log(vm)});
  },

//触发路由，离开页面之前
  beforeRouteLeave (to, from, next) {
    const leave = confirm("您确定离开吗");
    if(leave) next();
    next(false);
  },
  methods:{
    handleClick(action){
     if(action== "push"){
      //this.$router.go(1);
       //跳转到指定页面,注意传递参数的区别
      //  this.$router.push('/parent');

       const name = 'lison';
       this.$router.push({path:`argu/${name}`});
      //  this.$router.push({
      //     name:'argu',

      //     //通过url传递参数
      //     //  query:{
      //     //    name:'lison'
      //     //  }})

      //     params:{
      //       name:'lison'
      //     }
      //   })
     }
     else if(action == "back"){
       this.$router.back();
     }
     else if(action == "replace"){
       //替换当前历史纪录
       this.$router.replace({
         name:'parent'
       })
     }
    }
  }
}
</script>
