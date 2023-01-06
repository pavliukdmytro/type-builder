import './vue-shim.d.ts';
import './scss/main.scss';
import { createApp } from 'vue';

import VueTest from './test.vue';

createApp({
  components: {
    'vue-test': VueTest,
  },
  template: '<vue-test />',
}).mount('#app');
