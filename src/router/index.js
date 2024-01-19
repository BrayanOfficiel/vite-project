// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Numpad from '../components/Numpad.vue';
import ListCalls from '../components/ListCalls.vue';
import ListContacts from '../components/ListContacts.vue';


const routes = [
  { path: '/', component: ListCalls },
  { path: '/contacts', component: ListContacts },
  { path: '/numpad', component: Numpad },
  // ... (autres routes)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
