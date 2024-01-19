<!-- src/App.vue -->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>

export default {
  props: ['username'],
  data() {
    return {
      username: 'Haider',
    };
  },
};

</script>

<template>
  <div class="app">
    <nav class="sidebar">
      <div class="sidebar-up">
        <div class="icon">
          <img src="./assets/apple.svg" width="40">
        </div>
        <div class="list">
          <router-link class="nav-list-el" to="/">Liste d'appels</router-link>
          <router-link class="nav-list-el" to="/contacts">Contacts</router-link>
          <router-link class="nav-list-el" to="/numpad">Pavé numérique</router-link>
        </div>
      </div>
      <div class="sidebar-down">
        <p>👋 Bonjour {{ username }} !</p>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
@import url(assets/main.css);
@import url(assets/sidebar.css);
@import url(assets/footer.css);
</style>
