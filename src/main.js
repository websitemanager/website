import Vue from 'vue';
import Buefy from 'buefy';
import VueLazyload from 'vue-lazyload';
import VueScrollTo from 'vue-scrollto';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGitlab,
  faInstagram,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import router from './router';
import App from './App.vue';
import store from './store';

library.add(faExternalLinkAlt, faGitlab, faInstagram, faGithub, faTwitter);

Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '40px',
    threshold: 0.1,
  },
});

// 3.25 is the 'min-height' of the navbar set for Bulma.
const calculatedOffset = 3.25 * parseFloat(getComputedStyle(document.documentElement).fontSize);
Vue.use(VueScrollTo, { offset: -calculatedOffset });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
