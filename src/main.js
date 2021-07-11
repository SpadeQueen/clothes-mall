import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './common/Bus.js'

var app=createApp(App);
app.use(store).use(router).mount('#app');
// app.prototype.Bus="Bus";

