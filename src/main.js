import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App);

app.use(router);

app.mount('#app');

// new Vue({  router,  store,  render: h => h(App),}).$mount('#app');