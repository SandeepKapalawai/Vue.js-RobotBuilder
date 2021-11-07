<template>
 <div>
    <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" aria-hidden="true" />Build a robot
        </li>
        <!-- <li>{{user.userName}}</li>
        <button @click="changeUserName()">Change</button> -->
      </ul>
    </nav>
  </header>
  <main>
    <!-- <Search/> -->
    <RobotBuilder/>
  </main>
   </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobertBuilder.vue';
// import Search from './search/Search.vue';

export default {
  name: 'App',
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
  components: {
    RobotBuilder
  }
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
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  widows: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
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
</style>
