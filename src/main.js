import Vue from 'vue';
import App from './App.vue';
import '@aws-amplify/ui-components';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import vuetify from './plugins/vuetify';
import store from './store';

Amplify.configure(awsExports);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/amplify-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

var app = new Vue({
  vuetify,
  store,
  render: h => h(App)
});

app.$mount('#app');
