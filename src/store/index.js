import Vue from 'vue';
import Vuex from 'vuex';
import blog from './blog';
import airtable from './airtable';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blog,
    airtable,
  },
});
