<template>
  <div>
    <div id="main-content" class="flex-fill p-9" style="min-width: 400px; max-width: 1100px;">
      <h2>Twitter / X</h2>
      
      <div class="mb-3"></div>

      <div class="card" style="width: 90%">
        <div class="card-header">
          Embedia Vue - Twitter / X
        </div>
        <div class="card-body">
          <h4>Paradigm Links:</h4>
          <blockquote class="blockquote mt-5">
            <footer class="footer">
              https://twitter.com/i/status/xxxxxxxxxxxxxxxxxxx
              <br />
              https://twitter.com/username/status/xxxxxxxxxxxxxxxxxxx
              <br />
              https://x.com/i/status/xxxxxxxxxxxxxxxxxxx
              <br />
              https://x.com/username/status/xxxxxxxxxxxxxxxxxxx
            </footer>
          </blockquote>
        </div>
      </div>

      <div class="card mt-2" style="width: 90%">
        <div class="card-header">
          Twitter / X - Embed Syntax
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <pre><code>
&lt;EmbediaVue
    clip=""
    width=""
    cssname="embed-clip"
/&gt;
            </code></pre>
            <footer class="blockquote-footer">
              filename: <cite title="Source Title">Example.vue</cite>
            </footer>
          </blockquote>

<hr>
<p>CSS code:</p>
<blockquote class="blockquote mb-0">
            <pre><code>
.embed-clip {
    padding: 10px;
    max-width: 300px !important;
}
            </code></pre>
            <footer class="blockquote-footer">
              <cite title="Source Title">The video will automatically resize.</cite>
            </footer>
          </blockquote>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { EmbediaVue } from 'embedia-vue';

const videoClip = ref(''); // URL for the video
const width = ref(''); // Reactive width
const height = ref(''); // Reactive height
const error = ref(null); // Error state
const tempVideoClip = ref(''); // Temporary storage for new URL

// Basic URL validation
const validUrl = computed(() => {
  return tempVideoClip.value.startsWith('http://') || tempVideoClip.value.startsWith('https://');
});

// Watch for changes in videoClip
watch(videoClip, (newUrl) => {
  // Clear the URL first before loading new one
  tempVideoClip.value = '';
  setTimeout(() => {
    tempVideoClip.value = newUrl;
  }, 100); // Delay to ensure re-render
});
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
