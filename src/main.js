import { createApp } from 'vue';

import './styles/global.css';
import './styles/variables.css';
import 'vue3-toastify/dist/index.css';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import App from './App.vue';
import router from './router/index.js';

createApp(App).use(router).mount('#app');
