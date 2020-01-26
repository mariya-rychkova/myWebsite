import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PrismicVue from 'prismic-vue';
import linkResolver from './linkResolver';

/*
  Bootstrap files
*/

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/*
  Font-awesome files
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleLeft);

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
