<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Layout',
  };
  </script>
  
  <style>
  nav {
    display: flex;
    gap: 10px;
  }
  </style>
  