<template>
  <div id="app" class="d-flex">
    <!-- Sidebar -->
    <nav id="sidebar" class="bg-light p-3 border-end" style="width: 250px;">
      <!-- Sidebar toggle button for smaller screens -->
      <button class="btn btn-primary d-md-none mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-expanded="false" aria-controls="sidebarMenu">
        <span class="material-icons">menu</span> <!-- Material UI menu icon -->
      </button>
      
      <!-- Collapsible sidebar content -->
      <div class="collapse d-md-block" id="sidebarMenu">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link d-flex justify-content-between align-items-center" type="button" @click="toggleCollapse('servicesMenu')">
              Services
              <span class="material-icons">expand_more</span> <!-- Material UI expand icon -->
            </button>
            <div class="collapse" id="servicesMenu">
              <ul class="nav flex-column ms-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/services/design">Design</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/services/development">Development</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link d-flex justify-content-between align-items-center" type="button" @click="toggleCollapse('portfolioMenu')">
              Portfolio
              <span class="material-icons">expand_more</span> <!-- Material UI expand icon -->
            </button>
            <div class="collapse" id="portfolioMenu">
              <ul class="nav flex-column ms-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/portfolio/websites">Websites</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/portfolio/apps">Apps</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main content -->
    <div id="main-content" class="flex-fill p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Collapse } from 'bootstrap';

export default {
  name: 'App',
  setup() {
    const currentOpenMenu = ref(null);

    const toggleCollapse = (menuId) => {
      const submenu = document.getElementById(menuId);
      const bsCollapse = new Collapse(submenu, {
        toggle: false
      });

      if (submenu.classList.contains('show')) {
        bsCollapse.hide();
        currentOpenMenu.value = null;
      } else {
        if (currentOpenMenu.value && currentOpenMenu.value !== menuId) {
          const currentlyOpenSubmenu = document.getElementById(currentOpenMenu.value);
          if (currentlyOpenSubmenu) {
            const bsCollapseCurrentlyOpen = new Collapse(currentlyOpenSubmenu, {
              toggle: false
            });
            bsCollapseCurrentlyOpen.hide();
          }
        }

        bsCollapse.show();
        currentOpenMenu.value = menuId;
      }
    };

    return {
      toggleCollapse
    };
  }
}
</script>

<style>
/* Sidebar styling */
#sidebar {
  min-height: 100vh;
  position: relative;
  border-right: 1px solid #dee2e6; /* Add border to the right of the sidebar */
}

/* Main content area styling */
#main-content {
  flex: 1;
  background-color: #f8f9fa; /* Optional: Light background for the main content */
}

/* Nav link styling */
.nav-link {
  color: #212529; /* Dark text color for links */
  border-radius: 0.25rem; /* Rounded corners */
}

.nav-link:hover {
  background-color: #e9ecef; /* Background color on hover */
}

/* Collapsible button styling */
.btn-link {
  color: #212529; /* Dark text color */
  text-decoration: none; /* Remove underline */
}

.btn-link:hover {
  color: #0d6efd; /* Change color on hover */
}

/* Remove bullet points from all nav lists */
.nav ul {
  list-style-type: none; /* Remove bullets */
  padding-left: 0; /* Remove left padding */
}

.nav ul > li > ul {
  margin: 0;
}

.nav ul ul {
  padding-left: 1.5rem; /* Adjust indentation for nested items */
}

/* Custom icon styles */
.material-icons {
  font-size: 24px; /* Adjust icon size */
}
</style>
