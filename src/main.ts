import { createApp } from 'vue'
import './assets/styles/theme.scss';
import './style.css'
import './assets/styles/styles.scss';
import { inject } from '@vercel/analytics';
import App from './App.vue'

inject({
  debug: false,
});
createApp(App).mount('#app')
