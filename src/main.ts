import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/fontAwesome';
import App from './App.vue';
import './registerServiceWorker';
import './assets/styles/global.less';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
