
<script>

import { usePhoneStore } from '@/stores/contacts.js';

export default {
  setup() {
    const PhoneStore = usePhoneStore();

    return {
      PhoneStore,
    };
  },
};




</script>

<template>
  <div class="container">
    <div class="content">
      <h2>Journal d'appels</h2>
      <ul>
        <li class="" v-for="(call, index) in PhoneStore.calls" :key="index">
          <strong>{{ call.name }}</strong>
          <p>{{ call.number }}</p>
          <p>{{ call.type }}</p>
          <!-- afficher timestamp correctement -->
          <p>{{ call.timestamp.toLocaleString() }};</p>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<style>
@import url(../assets/common.css);

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

p {
  margin: 0;
}
</style>