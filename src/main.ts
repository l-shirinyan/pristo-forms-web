import { createApp } from 'vue';
import App from './App.vue';
import './style/index.css';
import './fonts/poppins/index.css';
import './fonts/rubik/index.css';
import './icons/overrides.css';
import './icons/web-icons/index.css';
import VueClickAway from 'vue3-click-away';
import i18n from './localization';

const app = createApp(App);
app.use(i18n);
app.use(VueClickAway);

app.mount('#app');
