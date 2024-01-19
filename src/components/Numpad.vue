<!-- src/components/Numpad.vue -->
  
<script>

import { usePhoneStore } from '@/stores/contacts.js';



export default {
  setup() {
    const PhoneStore = usePhoneStore();

    return {
      PhoneStore,
    };
  },
  data() {
    return {
      phoneNumber: '',
      contactName: '',
    };
  },
  computed: {
    matchingContact() {
      return this.PhoneStore.contacts.find(
        contact => contact.number === this.phoneNumber
      );
    },
  },
  watch: {
    phoneNumber(newValue, oldValue) {
      if (newValue.length > oldValue.length || newValue.length < oldValue.length) {
        const foundContact = this.matchingContact;
        this.contactName = foundContact ? foundContact.name : '';
      }
    },
  },
  methods: {
    dial(number) {
      this.phoneNumber += number;

      // vérifier si on a un contact avec ce numéro et afficher le nom du contact dans this.phoneNumber

    },
    remove() {
      this.phoneNumber = this.phoneNumber.slice(0, -1);


    },
    call() {
      if (this.phoneNumber.length === 0) {
        return;
      }
      if (this.contactName === '') {
        this.contactName = this.phoneNumber;
      }
      this.PhoneStore.calls.push({
        name: this.contactName,
        number: this.phoneNumber,
        type: 'dialed',
        timestamp: new Date().toISOString(),
        duration: 0,
      });
      this.phoneNumber = 'Appel en cours...';
      //timer 3s
      setTimeout(() => {
        this.phoneNumber = 'Correspondant injoignable';
      }, 3000);
      setTimeout(() => {
        this.phoneNumber = '';
      }, 5000);
    },
    addContact() {
      document.querySelector('.ajouter-contact').classList.toggle('afficher');
      this.PhoneStore.contacts.push({
        name: this.contactName,
        number: this.phoneNumber,
      });
    },
  },

};
</script>

<template>
  <div class="numpad-app">
    <div>
      <h2>Composez un numéro</h2>
      <div class="numpad">

        <form class="ajouter-contact" @submit.prevent="ajoutPerso()">
          <button type="submit">Ajouter le contact</button>
          <input class="number-shown" type="text" placeholder="Nom du contact">
        <input class="number-shown" type="tel" v-model="phoneNumber" disabled />
        </form>
        <input class="number-shown" type="tel" v-model="phoneNumber" disabled />
        <input class="contact-shown" type="tel" :value="contactName" disabled />


        <div class="lignes">
          <div class="ligne">
            <a class="numpad-btn" @click="dial(1)">1</a>
            <a class="numpad-btn" @click="dial(2)">2</a>
            <a class="numpad-btn" @click="dial(3)">3</a>
          </div>
          <div class="ligne">
            <a class="numpad-btn" @click="dial(4)">4</a>
            <a class="numpad-btn" @click="dial(5)">5</a>
            <a class="numpad-btn" @click="dial(6)">6</a>
          </div>
          <div class="ligne">
            <a class="numpad-btn" @click="dial(7)">7</a>
            <a class="numpad-btn" @click="dial(8)">8</a>
            <a class="numpad-btn" @click="dial(9)">9</a>
          </div>
          <div class="ligne">
            <a class="numpad-btn" @click="dial('*')">*</a>
            <a class="numpad-btn" @click="dial(0)">0</a>
            <a class="numpad-btn" @click="dial('#')">#</a>
          </div>
          <div class="ligne">
            <a class="numpad-btn" @click="addContact"><img
                src="https://icons.veryicon.com/png/o/miscellaneous/six-meter-icon-library/add-a-contact-2.png" width="20"
                alt=""></a>
            <a class="numpad-btn call" @click="call"><img
                src="https://cdn1.iconfinder.com/data/icons/material-communication/18/phone-512.png" width="20"
                alt=""></a>
            <a class="numpad-btn remove" @click="remove"><img src="https://vue-phone.vercel.app/img/delete.left.fill.svg"
                width="20" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
<style>
.numpad-app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.lignes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.ligne {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.numpad-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.call {
  background-color: lightgreen;
}

.remove {
  background-color: lightcoral;
}

.number-shown {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}

.contact-shown {
  width: 100%;
  height: 50px;
  border: none;
  color: rgb(168, 168, 168);
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}

.ajouter-contact {

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: none;
}

.afficher {
  display: flex;
  animation: fadeIn 0.3s ease-out;
}



@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
  
  