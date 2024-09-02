import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/embedia-vue-docs/'),  // Set the base URL here
  routes,
});

export default router;