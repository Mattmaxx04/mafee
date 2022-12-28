import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

//import 'sweetalert2/dist/sweetalert2.js';
// If you don't need the styles, do not connect

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp(App)

app.use(router, VueSweetalert2)

app.mount('#app')
