import Airtable from 'airtable';
import Vue from 'vue';
import Vuex from 'vuex';
import marked from 'marked';
import api from '@/services/api';

Vue.use(Vuex);

const airtable = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
});

const skillsBase = airtable.base(process.env.VUE_APP_AIRTABLE_SKILLS_BASE);
const portfolioBase = airtable.base(process.env.VUE_APP_AIRTABLE_PORTFOLIO_BASE);

export default new Vuex.Store({
  state: {
    skills: [],
    portfolio: [],
  },
  getters: {
    getItem: state => (type, id) => (
      state[type].find(item => item.id === id)
    ),
    getItems: state => type => (state[type]),
  },
  mutations: {
    addItem: (state, { type, item }) => {
      state[type].push(item);
    },
    updateItem: (state, { type, item }) => {
      const key = state[type].find(i => i.id === item.id);
      Object.assign(key, item);
    },
  },
  actions: {
    getSkills: async ({ commit }) => {
      const table = skillsBase('Skills');
      const records = await api.getRecords(table);

      records.forEach((record) => {
        commit('addItem', {
          type: 'skills',
          item: { id: record.getId(), loaded: false },
        });
      });
    },
    getSkillItems: async ({ commit }, id) => {
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

      commit('updateItem', {
        type: 'skills',
        item: {
          id: record.id,
          name: record.Name,
          value: record.Value,
          items: skillItems,
          loaded: true,
        },
      });
    },
    getPortfolio: async ({ commit }) => {
      const table = portfolioBase('Items');
      const records = await api.getRecords(table);

      records.forEach((record) => {
        commit('addItem', {
          type: 'portfolio',
          item: { id: record.getId(), loaded: false },
        });
      });
    },
    getPortfolioItem: async ({ commit }, id) => {
      const table = portfolioBase('Items');
      const item = await api.getRecord(table, id);

      commit('updateItem', {
        type: 'portfolio',
        item: {
          id: item.id,
          name: item.Name,
          link: item.Link,
          thumbnail: item.Thumbnail[0].url,
          description: item.Description ? marked(item.Description, { smartypants: true }) : '',
          loaded: true,
        },
      });
    },
  },
});
