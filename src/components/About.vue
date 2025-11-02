<template>
  <div>
    <div id="main-content" class="flex-fill p-9" style="min-width: 400px; max-width: 1100px;">
      <h2>About</h2>
      <div class="mb-3">
       
      </div>
      <div class="card" style="width: 90%">
  <div class="card-header">
    About Embedia Vue
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Embedia Vue is an embed package for Vue which can embed from platforms like TikTok, YouTube/Shorts, Twitter/X, Vimeo and Dailymotion.</p>
      
    </blockquote>
  </div>
</div>

<div class="row mt-5" style="width: 92%">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Vite</h5>
        <p class="card-text">Embedia vue can be run using vite.</p>
        <a href="#" class="btn btn-primary">Compatible</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Webpack</h5>
        <p class="card-text">Embedia vue can be run using webpack.</p>
        <a href="#" class="btn btn-primary">Compatible</a>
      </div>
    </div>
  </div>
</div>



<div class="card mt-5" style="width: 90%">
    <div class="card-header">
     Embed Syntax
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <pre><code>
&lt;EmbediaVue
    clip=""
    width=""
    height=""
    :autoplay="false"
    :fullscreen="false"
    :controls="true"
    cssname="rename-me-now"
/&gt;
        </code></pre>
    
        <footer class="blockquote-footer">filename: <cite title="Source Title">Example.vue</cite></footer>
      </blockquote>
    </div>
  </div>






  <div class="card mt-5" style="width: 90%">
    <div class="card-header">
     Import Syntax - Setup
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <pre><code>
&lt;script setup&gt;
import { EmbediaVue } from 'embedia-vue';
&lt;/script&gt;
        </code></pre>
        <footer class="blockquote-footer">filename: <cite title="Source Title">Example.vue</cite></footer>
      </blockquote>
    </div>
  </div>

  


  <div class="card mt-5" style="width: 90%">
    <div class="card-header">
     Import Syntax - Default
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <pre><code>
&lt;script&gt;
import { EmbediaVue } from 'embedia-vue';
export default {
  components: {
    EmbediaVue
  }
};
&lt;/script&gt;
        </code></pre>
        <footer class="blockquote-footer">filename: <cite title="Source Title">Example.vue</cite></footer>
      </blockquote>
    </div>
  </div>





  <div class="card mt-5" style="width: 90%">
    <div class="card-header">
     Import Syntax - Global
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <pre><code>
import { createApp } from 'vue';
import './style.css'; 
import App from './App.vue';
import router from './router';
import { EmbediaVue } from 'embedia-vue'; 


createApp(App)
  .component('EmbediaVue', EmbediaVue) 
  .use(router) 
  .mount('#app');
        </code></pre>
        <footer class="blockquote-footer">filename: <cite title="Source Title">main.js</cite></footer>
      </blockquote>
    </div>
  </div>









    </div>
  </div>
</template>

<script>
import { EmbediaVue } from 'embedia-vue';

export default {
  name: 'ExampleComponent',
  components: {
    EmbediaVue
  },
  data() {
    return {
      videoClip: '', // URL for the video
      width: '', // reactive width
      height: '', // reactive height
      error: null, // Error state
      tempVideoClip: '', // Temporary storage for new URL
    };
  },
  computed: {
    validUrl() {
      // Basic URL validation, enhance if needed
      return this.tempVideoClip.startsWith('http://') || this.tempVideoClip.startsWith('https://');
    }
  },
  watch: {
    videoClip(newUrl) {
      // Clear the URL first before loading new one
      this.tempVideoClip = '';
      setTimeout(() => {
        this.tempVideoClip = newUrl;
      }, 100); // Delay to ensure re-render
    }
  }
};
</script>


<style>
pre {
  width: 60%;
  background-color: #000000; /* Light background */
  padding: 1rem; /* Padding around the code */
  border-radius: 0.25rem; /* Rounded corners */
  overflow-x: auto; /* Horizontal scroll for long lines */
  color: #ffffff;
}

code {
  width: 60%;
  font-family: monospace; /* Monospaced font for code */
  color: #d63384; /* Optional: Color for code text */
}
</style>