import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

import Facebook from '../components/embedsites/Facebook.vue';
import Instagram from '../components/embedsites/Instagram.vue';
import Youtube from '../components/embedsites/Youtube.vue';
import YoutubeShorts from '../components/embedsites/YoutubeShorts.vue';
import Twitter from '../components/embedsites/Twitter.vue';
import Tiktok from '../components/embedsites/Tiktok.vue';
import Vimeo from '../components/embedsites/Vimeo.vue';
import Dailymotion from '../components/embedsites/Dailymotion.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'embed-websites/facebook', component: Facebook },
      { path: 'embed-websites/instagram', component: Instagram },
      { path: 'embed-websites/youtube', component: Youtube },
      { path: 'embed-websites/youtube-shorts', component: YoutubeShorts },
      { path: 'embed-websites/twitter', component: Twitter },
      { path: 'embed-websites/tiktok', component: Tiktok },
      { path: 'embed-websites/vimeo', component: Vimeo },
      { path: 'embed-websites/dailymotion', component: Dailymotion },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash history
  routes,
});

export default router;
