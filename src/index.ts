import './vue-shim.d.ts';

import './scss/main.scss';
import { createApp } from 'vue';

import App from './app/App.vue';

createApp({
  components: {
    'vue-test': App,
  },
  template: '<vue-test />',
}).mount('#app');
