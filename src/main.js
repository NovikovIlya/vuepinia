import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
