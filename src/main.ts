import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BusHook from "@/Bus/Infrastructure/BusHook";


const app = createApp(App);

const busHook: BusHook = new BusHook();
app.config.globalProperties.$commandBus = busHook.getCommandProperty();
app.config.globalProperties.$queryBus = busHook.getQueryProperty();

app.use(createPinia());
app.use(router);

app.mount('#app');
