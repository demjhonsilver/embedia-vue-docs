<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  padding: 1em;
  background-color: #f8f9fa;
}
nav a {
  margin: 0 0.5em;
  text-decoration: none;
  color: #42b983;
}
</style>