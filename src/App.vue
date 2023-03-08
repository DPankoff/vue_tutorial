<template>
  <div class="app">
    <nav>
      <router-link to="/">        Home    </router-link> |
      <router-link to="/about">   About   </router-link> |
      <router-link to="/planner"> Planner </router-link> |
      <router-link to="/todos">   Todos   </router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>


<style>

 #app {
  font-size: 20px;
  display: block;
  text-align: center;
  margin-top: 20px;
} 

</style>
