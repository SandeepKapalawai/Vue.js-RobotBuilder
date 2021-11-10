import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import pinDirectives from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency: currencyFilter
};

app.use(router)
  .use(store)
  .directive('pin', pinDirectives)
  .mount('#app');
