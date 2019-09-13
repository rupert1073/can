import Vue from 'vue'

import App from './App.vue'
import router from '@router'
import {store} from '@state'

import EvaIcons from 'vue-eva-icons'
Vue.use(EvaIcons)

// Main SASS
import '@sass'

// load vuex i18n module
import vuexI18n from 'vuex-i18n';
Vue.use(vuexI18n.plugin, store);
import translationsTr from '@src/resources/languages/tr.json'
import translationsEn from '@src/resources/languages/en.json'
// add translations directly to the application
Vue.i18n.add('tr', translationsTr);
Vue.i18n.add('en', translationsEn);

// set the start locale to use
Vue.i18n.set('en');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
