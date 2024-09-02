<template>
    <div>

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
  