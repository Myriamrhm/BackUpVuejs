<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home"> HOME </router-link>   | 
      <router-link to="/connexion"> LOG IN </router-link>  | 
      <router-link to="/inscription"> SIGN UP </router-link>  | 
      <router-link to="/categories"> CATEGORIES </router-link>  |
      <router-link to="/ressourceManag"> ADMIN </router-link>  |
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255,);
}
#nav {
  padding: 10px;
  margin-top: 40px;
  a {
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: transparent;
    &.router-link-exact-active {
      color: #ffffff88;
    text-decoration: none;
    }
  }
}
</style>
