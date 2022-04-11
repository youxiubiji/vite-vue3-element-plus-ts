import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import store from './store/index';

import './permissio.ts'; // permission control

import './styles/index.scss';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
