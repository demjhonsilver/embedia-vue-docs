import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import App from './App.vue'
import router from './router';
import { EmbediaVue } from 'embedia-vue'; // Import global

createApp(App)
  .component('EmbediaVue', EmbediaVue) 
  .use(router) 
  .mount('#app');