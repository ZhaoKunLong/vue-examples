import './assets/main.css'

import { createApp } from 'vue'
// Use the app.vue components be the root vue components
// all the thing are inside the root components . So do the layout can be in here 
import App from './App.vue'
// vue router, do the reject browsers actions, and mount different components on the router view section.
import router from './router'

// Use vue createAPP, to organize the All vue files and assets. and created a implement app
export const app = createApp(App)

// config and set the router.
app.use(router)

// after created the app,. mount the whole app into the index.html's app div. 
app.mount('#app')