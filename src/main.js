import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// AOS animation
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Initialize AOS and refresh after navigation
AOS.init({
  duration: 800,
  once: true,
})

router.afterEach(() => {
  AOS.refresh()
})