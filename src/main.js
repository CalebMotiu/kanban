import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap-icons/font/bootstrap-icons.css"

import { createPinia } from "pinia"
const pinia = createPinia()

const app = createApp(App)

app.use(router).use(pinia).mount("#app")
