<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <!-- 对to绑定对象 -->
      <router-link v-bind:to="{name:'main'}">Home2</router-link>|
      <!-- 简写 -->
      <router-link :to="{name:'main'}">Home2</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <router-view name="email" key="emial"/>
      <router-view name="tel" key="tel"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  data(){
    return {
      routerTransition:''
    }
  },
  watch:{
    '$route' (to){
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName); 
    }
  }
}
</script>

<style lang="less">

.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition:opacity 1s ease;
}
.router-enter-to{
  opacity:1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition:opacity 1s ease;
}
.router-leave-to{
  opacity:0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
