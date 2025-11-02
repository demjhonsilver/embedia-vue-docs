<template>
  <div>
    <div id="main-content" class="flex-fill p-3">
      <h1>Welcome to Embedia Vue</h1>
      <div class="mb-3">
        <label for="videoLink" class="form-label">Paste link here:</label>
        <input
          type="text"
          id="videoLink"
          class="form-control"
          v-model="videoClip"
          placeholder="YouTube, Shorts, X, TikTok, Vimeo and Dailymotion"
        />
      </div>

      <!-- Tricard layout -->
      <div class="d-flex justify-content-around">
        <!-- Card 1: Video Link -->
        <div class="card" style="width: 77%; text-align: center;">
          <div class="card-body">
            <!-- Embed video component -->
            <div class="wd mt-3" :style="{ width: width + 'px', height: height + 'px' }">
              <EmbediaVue 
                ref="embediaVueComponent"
                :clip="tempVideoClip" 
                :fullscreen="true"
                :autoplay="false"
                v-if="tempVideoClip"
              />
            </div>
          </div>
        </div>

        <!-- Card 2: Width -->
        <div class="card" style="width: 20%; text-align: left;">
          <div class="card-body">
            <label for="width" class="form-label">Width</label>
            <input
              type="number"
              id="width"
              class="form-control"
              v-model="width"
              placeholder="Enter width"
            />
          </div>
        </div>
      </div>

      <!-- Error message display -->
      <div v-if="error" class="alert alert-danger mt-3">
        {{ error }}
      </div>

      <hr />

      <footer>
        <!-- Your footer content here -->
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { EmbediaVue } from 'embedia-vue';

const videoClip = ref(''); // URL for the video
const width = ref(''); // Reactive width
const height = ref(''); // Reactive height
const error = ref(null); // Error state
const tempVideoClip = ref(''); // Temporary storage for new URL

watch(videoClip, (newUrl) => {
  // Clear the URL first before loading new one
  tempVideoClip.value = '';
  setTimeout(() => {
    tempVideoClip.value = newUrl;
  }, 100); // Delay to ensure re-render
});
</script>

<style scoped>
.wd {
  margin: auto;
  max-width: 1366px; /* Set maximum width */
}
</style>
