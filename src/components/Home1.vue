<template>
  <div>
    <div id="main-content" class="flex-fill p-3">
      <h1>Welcome to Embedia Vue</h1>
      <p>Documentation</p>

      <!-- Input field for the video link -->
      <div class="mb-3">
        <label for="videoLink" class="form-label">Video Link</label>
        <input
          type="text"
          id="videoLink"
          class="form-control"
          v-model="videoClip"
          placeholder="YouTube, Shorts, Facebook, Reels, Twitter, TikTok, Instagram"
        />
      </div>

      <!-- Input fields for width and height -->
      <div class="row mb-3">
        <div class="col">
          <label for="videoWidth" class="form-label">Width</label>
          <input
            type="number"
            id="videoWidth"
            class="form-control"
            v-model.number="width"
            placeholder="640"
          />
        </div>
        <div class="col">
          <label for="videoHeight" class="form-label">Height</label>
          <input
            type="number"
            id="videoHeight"
            class="form-control"
            v-model.number="height"
            placeholder="360"
          />
        </div>
      </div>

      <!-- Error message display -->
      <div v-if="error" class="alert alert-danger">
        {{ error }}
      </div>

      <!-- Embed video component -->
      <EmbediaVue
        :clip="videoClip"
        :width="width"
        :height="height"
        :cssname="'embed-clip'"
        v-if="validUrl"
      />

      <hr />

      <footer>
        <!-- Your footer content here -->
      </footer>
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
      width: 640, // Default width
      height: 360, // Default height
      error: null, // Error state
    };
  },
  computed: {
    validUrl() {
      // Basic URL validation, enhance if needed
      return this.videoClip.startsWith('http://') || this.videoClip.startsWith('https://');
    }
  },
  watch: {
    videoClip(newUrl) {
      // Validate URL when it changes
      if (!this.validUrl) {
        this.error = 'Please enter a valid video URL.';
      } else {
        this.error = null;
      }
    }
  }
};
</script>

<style scoped>
.embed-clip {
  float: right;
  border: 2px solid green;
}
</style>
