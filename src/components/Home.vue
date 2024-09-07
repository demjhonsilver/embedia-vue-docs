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
          placeholder="YouTube, Shorts, Facebook, Reels, Twitter, TikTok, Instagram"
        />
      </div>

      <!-- Tricard layout -->
      <div class="d-flex justify-content-around">
        <!-- Card 1: Video Link -->
        <div class="card" style="width: 70%; text-align: center;">
          <div class="card-body">
            <!-- Embed video component -->
            <div class="wd mt-3" :style="{ width: width + 'px', height: height + 'px' }">
              <EmbediaVue 
                ref="embediaVueComponent"
                :clip="tempVideoClip" 
                :fullscreen="true"
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

<style scoped>
.wd {
  margin: auto;
  max-width: 900px; /* Set maximum width */
}
</style>
