<template>
 <div>
    <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link  class="nav-link" :to="{name:'Home'}" exact>
          <img class="logo" src="./assets/build-a-bot-logo.png" aria-hidden="true" />Build a robot
          </router-link>
        </li>
          <li class="nav-item">
          <router-link  class="nav-link" :to="{name:'Build'}" exact>
          Build
          </router-link>
        </li>
        <!-- <li>{{user.userName}}</li>
        <button @click="changeUserName()">Change</button> -->
      </ul>
    </nav>
  </header>
<div class="container">
    <aside class="aside">
 <router-view name="sidebar"/>
  </aside>

  <main>
    <!-- <Search/> -->
    <!-- <RobotBuilder/> -->
    <router-view/>
  </main>
  </div>
   </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
// import RobotBuilder from './build/RobertBuilder.vue';
// import Search from './search/Search.vue';

export default {
  name: 'App'
  // provide() {
  //   return {
  //     user: this.user
  //   };
  // },
  // data() {
  //   return {
  //     user: { userName: 'jim' }
  //   };
  // },
  // components: {
  //   RobotBuilder
  // }
  // methods: {
  //   changeUserName() {
  //     this.user.userName = 'yest';
  //   }
  // }
};
</script>

<style>
  body {
    background-attachment: fixed;
    background: linear-gradient(to bottom, #555, #999);
  }
</style>
<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  /* margin: 0 auto; */
  padding: 30px;
  background-color: white;
  width: 1064px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link{
  text-decoration: none;
  color: inherit;}

.router-link-active{
color:white;
}
.container{
  display:  flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
