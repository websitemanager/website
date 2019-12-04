import Airtable from 'airtable';
import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/api';

Vue.use(Vuex);

const skillsBase = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
}).base(process.env.VUE_APP_AIRTABLE_SKILLS_BASE);

export default new Vuex.Store({
  state: {
    skills: [],
  },
  getters: {
    getSkill: state => id => (
      state.skills.find(skill => skill.id === id)
    ),
  },
  mutations: {
    addSkill(state, skill) {
      state.skills.push(skill);
    },
  },
  actions: {
    async getSkillItems({ commit }, id) {
      const getItem = async (itemID) => {
        const table = skillsBase('Items');
        const item = await api.getRecord(table, itemID);

        return {
          id: item.id,
          name: item.Name,
          link: item.Link,
        };
      };

      const table = skillsBase('Skills');
      const record = await api.getRecord(table, id);

      const skillItems = [];

      // eslint-disable-next-line
      for (const item of record.Items) {
        // eslint-disable-next-line
        const i = await getItem(item);
        skillItems.push(i);
      }

      commit('addSkill', {
        id: record.id,
        name: record.Name,
        value: record.Value,
        items: skillItems,
      });
    },
  },
});
