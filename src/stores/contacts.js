import { defineStore } from 'pinia'

export const usePhoneStore = defineStore('phone', {
  state: () => ({

    contacts: [
      {
        name: 'John Doe',
        number: '00',
      },
      {
        name: 'Jane Doe',
        number: '9876543210',
      },
      {
        name: 'Papa',
        number: '0635463953',
      },
      {
        name: 'Papa & Maman',
        number: 'famille@icloud.com',
      }
    ],

    calls: [
      {
        name: 'John Doe',
        number: '0123456789',
        type: 'Manqué',
        timestamp: '2023-11-17T13:35:00.000Z',
        duration: 0,
      },
      {
        name: 'Jane Doe',
        number: '9876543210',
        type: 'Entrant',
        timestamp: '2023-12-15T15:23:00.000Z',
        duration: 112,
      },
      {
        name: 'John Doe',
        number: '0123456789',
        type: 'Sortant',
        timestamp: '2023-12-23T12:23:55.000Z',
        duration: 41,
      },
      {
        name: 'Papa',
        number: '0635463953',
        type: 'Sortant',
        timestamp: '2024-12-31T12:44:00.000Z',
        duration: 111,
      },
      {
        name: 'Papa & Maman',
        number: 'famille@icloud.com',
        type: 'Sortant',
        timestamp: '2024-01-01T00:00:00.000Z',
        duration: 524,
      }
    ],
        
  }),
  actions: {
    ajoutContact(contact) {
      this.contacts.push(contact)
    },
    ajoutAppel(appel) {
      this.calls.push(appel)
    },
  }
})