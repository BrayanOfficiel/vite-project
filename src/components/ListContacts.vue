<script>

import { usePhoneStore } from '@/stores/contacts.js';

export default {
  setup() {
    const PhoneStore = usePhoneStore();

    return {
      PhoneStore,
    };
  },

  methods: {
			ajoutContact() {
				this.PhoneStore.ajoutContact(this.formPerso)
				this.formPerso = {
					pseudo: '',
					age: 0,
				}
			},
		},
};
</script>
  
<template>
  <div class="container">
    <div class="content">
      <h2>Liste de contacts</h2>
      <hr>
      <h3>Ajouter un contact</h3>
      <form @submit.prevent="ajoutContact()">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" />
        <label for="number">Numéro</label>
        <input type="text" id="number" v-model="number" />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        <!-- afficher la liste des contacts depuis Phonestore -->
        <li v-for="(contact, index) in PhoneStore.contacts" :key="index">
          <strong>{{ contact.name }}</strong>
          <p>{{ contact.number }}</p>
          <button @click="callContact(contact.number)">Appeler</button>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  
<style>
@import url(../assets/common.css);
</style>