import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "../style.css";

let app=createApp(App)

app.directive("styledfallback",(el,binding)=> {
    el.textContent=binding.value.text
    el.style.color=binding.value.color
    el.style.fontStyle=binding.value.style
})

app.mount('#app')
